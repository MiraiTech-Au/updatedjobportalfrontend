import classNames from "classnames";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { crossRedIcon, downIcon, whiteTickIcon } from "../../../assets/icons";
import { API_RESPONSES, ALERT_TIMEOUT } from "../../../constants";
import { capitalizeFirstLetterOfWord } from "../../../helpers";
import { actions } from "./alert.reducers";

const { setAlert } = actions;
const { ERROR, SUCCESS } = API_RESPONSES;

const Alert = ({
  type = ERROR,
  message,
  handleOnClose = () => {},
  timeout = ALERT_TIMEOUT,
  shouldShowAlertType = true,
}) => {
  const [shouldShowErrorDetails, setShouldShowErrorDetails] =
    useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(handleOnClose, timeout);
  }, [handleOnClose, timeout]);

  return (
    <div
      className={classNames("grid border px-4 py-3 rounded", {
        "bg-red-100 border-red-400 text-red-700": type === ERROR,
        "bg-green-100 border-green-400 text-green-700": type === SUCCESS,
      })}
      role="alert"
    >
      <div className="grid relative" >
      {shouldShowAlertType && <strong className="font-bold">{type}:</strong>}
      {message && (
        <span className="block sm:inline w-11/12 whitespace-pre-line">
          {capitalizeFirstLetterOfWord(message.customErrorMessage || message)}
        </span>
      )}
      {message.exceptionMessage && (
        <button
          className="absolute top-0 bottom-0 right-10 px-4 py-3 cursor-pointer flex items-center"
          onClick={() => {
            setShouldShowErrorDetails(!shouldShowErrorDetails);
          }}
          type="button"
        >
        
        </button>
      )}
      <div
        className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer flex items-center"
        onClick={() => {
          handleOnClose();
          dispatch(setAlert());
        }}
      >
        {/* <img
          src={type === SUCCESS ? whiteTickIcon : crossRedIcon}
          alt="cross"
          className={classNames("w-4 h-4", {
            "p-0.5 border-solid rounded-full bg-green-400 my-auto":
              type === SUCCESS,
          })}
        /> */}
      </div>
      </div>
      {shouldShowErrorDetails && (
        <div className="mt-2 text-sm">{message.exceptionMessage}</div>
      )}
    </div>
  );
};

export default Alert;
