import { createAsyncThunk } from "@reduxjs/toolkit";
import doFetch from "../../infrastructure/doFetch";

export const fetchUser = createAsyncThunk(
  "fetch-user",
  async ({ useCache, showSpinner } = {}, args) => {
    return doFetch({
      url: `getdetails/65bb6527e552949ddcebf7d2`,
      method: "GET",
      useCache,
      showSpinner,
      spinner: "FETCH_USERS",
      errorMessage: "Unable to fetch user. Please try again later.",
      successMessage: "Successfully fetched user.",
      ...args,
    });
  }
);

export const updateUser = createAsyncThunk(
  "update-user",
  async ( data, args, { useCache, showSpinner } = {}) => {
    return doFetch({
      url: `update/${data.id}`,
      method: "PUT",
      config: { body: JSON.stringify(data) },
      useCache,
      showSpinner,
      spinner: "UPDATE_USER",
      errorMessage: "Unable to update user. Please try again later.",
      successMessage: "Successfully updated user.",
      ...args,
    });
  }
);
  
export const updateProfile = createAsyncThunk(
  "update-profile",
  async ( formdata, _id, args, { useCache, showSpinner } = {}) => {
    console.log("do fetch ", formdata, "id",_id);
    return doFetch({
      url: `upload/profile/${_id}`,
      method: "PUT",
      config: { body: formdata },
      useCache,
      showSpinner,
      spinner: "UPDATE_PROFILE",
      errorMessage: "Unable to update user profile. Please try again later.",
      successMessage: "Successfully updated user profile.",
      ...args,
    });
  }
);

export const getUser = createAsyncThunk(
  "get-user",
  async ( { useCache, showSpinner } = {}, args) => {
    return doFetch({
      url: 'users/me',
			method: 'GET',
      useCache,
      showSpinner,
      spinner: "GET_USER",
      errorMessage: "Unable to update user. Please try again later.",
      successMessage: "Successfully updated user.",
      ...args,
    });
  }
);


export const getSkills = createAsyncThunk(
  "get-skills",
  async ( inputValue, args, { useCache, showSpinner } = {}) => {
    return doFetch({
      url: `keyskills?searchTerm=${inputValue}`,
			method: 'GET',
      useCache,
      showSpinner,
      spinner: "GET_SKILLS",
      errorMessage: "Unable to update user. Please try again later.",
      successMessage: "Successfully updated user.",
      ...args,
    });
  }
);
