import getCorelationId from "./getCorelationId";

const buildHeaders = (url, httpConfig, isMultipartFormData) => {
  const defaultHeaders = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Request-Id": getCorelationId(),
    },
  };
  if (isMultipartFormData) {
    return;
  }

  return httpConfig
    ? {
        headers: {
          ...defaultHeaders.headers,
          ...httpConfig.headers,
        },
      }
    : defaultHeaders;
};

export default buildHeaders;
