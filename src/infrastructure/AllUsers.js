import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, selectUser } from "../pages/user";
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
    const dispatch = useDispatch();
  const allUsers = useSelector(selectUser);
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <div className="scrollbar content overflow-auto p-6 flex-1">
      All Users
      <button onClick={()=>navigate('/profile')}>Go to Profile</button>
      <div>{JSON.stringify(allUsers)}</div>
    </div>
  );
};

export default AllUsers;
