import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="scrollbar content overflow-auto p-6 flex-1">
      <div className="text-center p-6">
        <div className="icon mb-6">
          <img
            className="mx-auto w-[84px]"
            alt="empty-layout"
          />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Route Not Found</h1>
        <div className="inline-block">
          <button
            className="btn bg-indigo-100 text-indigo-700 hover:bg-indigo-200 focus:bg-indigo-100"
            onClick={() => navigate(-1)}
          >
            Click here to go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
