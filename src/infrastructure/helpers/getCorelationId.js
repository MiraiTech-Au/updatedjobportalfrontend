import { CACHE_KEYS } from "../../constants";

const { X_REQUEST_ID } = CACHE_KEYS;

const getCorelationId = () => {
  if (sessionStorage.isAuthenticated)
    return sessionStorage.getItem(X_REQUEST_ID);
  return;
};

export default getCorelationId;
