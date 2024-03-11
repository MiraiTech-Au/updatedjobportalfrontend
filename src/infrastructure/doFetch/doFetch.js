import {validateApiRequest} from "../helpers";
import buildHeaders from "../helpers/buildHeaders";
import getErrorMessages from "../helpers/getErrorMessages";
import { selectAwaitedRequest, deleteAwaitedRequest } from "../awaitedRequests";
import { addSpinner, removeSpinner } from "../../components/organisms/Spinner";
import { setAlert } from "../../components/organisms/Alert";
import httpMethods from "../http";

const doFetch = (props) => {
  const {
    url,
    method = "GET",
    config = {},
    getState,
    dispatch,
    errorMessage,
    successMessage,
    showSpinner = false,
    spinner = "",
    useCache = false,
    stubData,
    isFormData = false,
    rejectWithValue,
  } = props;
  
  try {

    if(!getState || typeof getState !== 'function'){
      
      throw new Error(
        "getState is required and must have a getState method defined on it"
        )
      }
      
      if (!dispatch || typeof dispatch !== "function") {
        throw new Error("dispatch is required and must be a function");
      }
      
      validateApiRequest(url, method);
      
      
      if (stubData) {
        return stubData;
      }
      
      
      const isAlreadyAwaitedRequest = selectAwaitedRequest(getState(), {
        url,
        method: method.toLowerCase(),
      });
      
      if (isAlreadyAwaitedRequest) {
        return rejectWithValue("Request is already pending.");
      }

      if (spinner) {
        dispatch(addSpinner(spinner));
      }

      const newConfig = { ...config, ...buildHeaders(url, config, isFormData) };

      return httpMethods[method](url, newConfig, { successMessage, errorMessage })
      .then((body) => {
        if (spinner) dispatch(removeSpinner(spinner));
        return Promise.resolve(body);
      })
      .catch(async (exception) => {
        if (spinner) dispatch(removeSpinner(spinner));
        const apiErrorMessage = await getErrorMessages(exception, errorMessage);
        dispatch(setAlert({ message: apiErrorMessage }));
        setTimeout(() => {
          dispatch(setAlert());
        }, 1000);
        throw exception;
      })
      .then((api_responses) => {
        deleteAwaitedRequest({
          url,
          method: method.toLowerCase(),
        });

        return api_responses;
      });
    
  } catch (exception) {
    console.log("Exception occurred: ", exception);
    throw exception;
  }
};

export default doFetch;