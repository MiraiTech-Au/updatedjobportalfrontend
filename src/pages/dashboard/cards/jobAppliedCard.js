import React from "react";

const JobAppliedCard = () => {
  return (
    <div className="rounded-xl shadow-lg bg-green-gradient p-6 text-white m-12">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-sm font-medium">Job Applied</div>
        </div>
        <div className="text-3xl font-bold">4</div>
      </div>
    </div>
  );
};

export default JobAppliedCard;
