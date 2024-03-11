import { createAsyncThunk } from "@reduxjs/toolkit";
import doFetch from "../../infrastructure/doFetch";

export const fetchUser = createAsyncThunk(
    "fetch-user",
    async ( { useCache, showSpinner } = {}, args) => {
      return doFetch({
        url: `user`,
        method: "GET",
        useCache,
        showSpinner,
        spinner: 'FETCH_USERS',
        errorMessage: "Unable to fetch user. Please try again later.",
        successMessage: "Successfully fetched user.",
        ...args,
      });
    }
  );