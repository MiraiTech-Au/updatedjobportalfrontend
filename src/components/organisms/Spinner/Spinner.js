import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { selectSelectedSpinner } from "./index";
// import { spinnerIcon } from "../../../assets/icons";
import { DATA_TYPES } from "../../../constants";
import { actions as spinnerActions } from "./spinner.reducers";

const { OBJECT } = DATA_TYPES;
const { addSpinner } = spinnerActions;
const REFRESHED = "refreshed";

const Loader = () => (
  <img
    // src={spinnerIcon}
    className="inline animate-spin h-6 w-8"
    alt="spinner-icon"
  />
);

export default function Spinner({
  name,
  setIsSpinnerActive = () => {},
  children,
  showSpinner,
  persistSize = false,
  loaderComponent = <Loader />,
}) {
  const dispatch = useDispatch();
  const spinners = useSelector(selectSelectedSpinner);

  const [shouldShowSpinner, setShouldShowSpinner] = useState(!spinners.length);

  useEffect(() => {
    setShouldShowSpinner(
      spinners.some((spinnerName) =>
        typeof name === OBJECT
          ? name.some((spinner) => spinner === spinnerName)
          : spinnerName === name
      )
    );
  }, [name, spinners]);

  useEffect(() => {
    !spinners.length && dispatch(addSpinner(REFRESHED));
  }, [dispatch, spinners]);

  useEffect(() => {
    setIsSpinnerActive(shouldShowSpinner);
  }, [shouldShowSpinner, setIsSpinnerActive]);

  return (
    <>
      {(shouldShowSpinner || showSpinner) && (
        <div className="flex justify-center items-center flex-1 m-auto h-full">
          {loaderComponent}
        </div>
      )}
      {(!(shouldShowSpinner || showSpinner) || persistSize) && (
        <span
          className={classNames({
            invisible: shouldShowSpinner || showSpinner,
          })}
        >
          {children}
        </span>
      )}
    </>
  );
}
