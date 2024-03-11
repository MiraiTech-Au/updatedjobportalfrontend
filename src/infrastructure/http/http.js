import { buildApiUrl } from "../helpers";
import tryTill from "../helpers/tryTill";
import { HTTPS_STATUS_CODES } from "./http.constants";
import { GITHUB_AUTH_FLOW } from "../../constants";

const { BAD_REQUEST, INTERNAL_SERVER_ERROR, NO_CONTENT } = HTTPS_STATUS_CODES;
const { GITHUB, PROVIDER } = GITHUB_AUTH_FLOW;
const INVITED_USERS = "invited-users";
const GITHUB_AUTHENTICATION = "github-authentication";

const logError = ({ exception, errorMessage } = {}) => {
  const message = errorMessage || exception.message || exception;
  console.log("Error Message:", message);
};

const handleRequestMethod = async (
  url,
  httpMethod,
  config,
  successMessage,
  errorMessage
) => {
  let cognitoUser = null;
  const provider = sessionStorage.getItem(PROVIDER);
  if (
    !url.includes(INVITED_USERS) &&
    !url.includes(GITHUB_AUTHENTICATION) &&
    provider !== GITHUB
  )

  if (!url) throw new Error("You must specify a url");

  const handleFetch = async () => {
    let response;
    let newConfig = {};
    
    newConfig = addJwtToken(config);


    try {
      const apiUrl = buildApiUrl(url);
      return fetch(apiUrl, { ...newConfig, method: httpMethod }).then(
        (response) => {
          if (response.headers) {
            const authHeader = response.headers.get('Authorization')
            
            setJwtTokenFromHeaderResponse(authHeader)
          }
          if (response.ok) {
            if (
              response.headers &&
              response.headers.map &&
              response.headers.map["content-type"].includes("stream")
            )
              return response;
            else if (response.status === NO_CONTENT)
              Promise.resolve("No Content");
            return response.json();
          } else if (
            response.status === BAD_REQUEST ||
            response.status === INTERNAL_SERVER_ERROR
          ) {
            return Promise.reject(response);
          }

          Promise.reject(response);
        }
      );
    } catch (exception) {
      logError(false, { exception, errorMessage });
      response = { ...response, status: exception.response.status };
    }

    return response;
  };

  return tryTill(handleFetch, () =>
    cognitoUser ? cognitoUser.signInUserSession.accessToken.jwtToken : true
  );
};

const get = (url, config, { successMessage, errorMessage } = {}) => {
  
  return handleRequestMethod(url, "GET", config, successMessage, errorMessage);
};

const post = (url, config, { successMessage, errorMessage } = {}) => {
  return handleRequestMethod(url, "POST", config, successMessage, errorMessage);
};

const put = (url, config, { successMessage, errorMessage } = {}) => {
  return handleRequestMethod(url, "PUT", config, successMessage, errorMessage);
};

const patch = (url, config, { successMessage, errorMessage } = {}) => {
  return handleRequestMethod(
    url,
    "PATCH",
    config,
    successMessage,
    errorMessage
  );
};

const invokeDelete = (url, config, { successMessage, errorMessage } = {}) => {
  return handleRequestMethod(
    url,
    "DELETE",
    config,
    successMessage,
    errorMessage
  );
};

function addJwtToken(config) {
	// TODO: Implement me
	const jwtToken = localStorage.getItem('jwtToken')
	if (!jwtToken || !config) {
	  return config;
	}
	
	const authorization = `Bearer ${jwtToken}`;
	return {
	  ...config,
	  headers: {
	    ...config.headers,
	    Authorization: authorization
	  }
	};
}

function setJwtTokenFromHeaderResponse(authorizationHeader) {
	const jwtToken = parseJwtTokenFromHeader(authorizationHeader)
	if (jwtToken) {
		localStorage.setItem('jwtToken', jwtToken)
	} else {
		localStorage.removeItem('jwtToken')
	}
}

function parseJwtTokenFromHeader(authorizationHeader) {
	if (!authorizationHeader) {
		return
	}
	const tokens = authorizationHeader.match(/\S+/g)

	// We are getting the second token because the first token will be Bearer.
	// EX: Bearer woeirweoirjw....
	return tokens.length > 1 ? tokens[1] : null
}

const httpMethods = {
  GET: get,
  POST: post,
  PUT: put,
  PATCH: patch,
  DELETE: invokeDelete,
};

export default httpMethods;
