import { HTTPS_STATUS_CODES } from "../http/http.constants";

const { BAD_REQUEST, INTERNAL_SERVER_ERROR } = HTTPS_STATUS_CODES;

const getErrorMessages = async (exception, customErrorMessage) => {
  const shouldShowErrorMessage =
    exception &&
    (exception.status === BAD_REQUEST ||
      exception.status === INTERNAL_SERVER_ERROR);
  if (shouldShowErrorMessage) {
    const formattedExceptionText = await exception.text();
    const formattedException = exception && JSON.parse(formattedExceptionText);
    return { customErrorMessage, exceptionMessage: formattedException.message};
  } else return customErrorMessage;
};

export default getErrorMessages;
