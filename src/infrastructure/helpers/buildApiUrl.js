import { API_PREFIX } from "../http/http.constants";

const buildApiUrl = (url) => {
  const requestUrl = url.charAt(0) !== "/" ? `/${url}` : url;
  return API_PREFIX ? `${API_PREFIX}/${url}` : requestUrl;
};

export default buildApiUrl;
