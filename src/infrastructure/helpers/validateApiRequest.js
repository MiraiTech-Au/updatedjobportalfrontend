import httpMethods from "../http";

const validateApiRequest = (url, httpMethod) => {
  if (!url) {
    throw new Error("url is required.");
  }
  if (!httpMethod || !httpMethods[httpMethod]) {
    throw new Error(
      "httpMethod is required and must index the http service and resolve to a method."
    );
  }
};

export default validateApiRequest;
