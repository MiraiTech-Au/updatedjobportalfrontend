import { createAsyncThunk } from "@reduxjs/toolkit";
import doFetch from "../../infrastructure/doFetch";


export const signupUser = createAsyncThunk(
    "signup-user",
    async ( data, args, { useCache, showSpinner } = {}) => {
        console.log('signup data', data)
        console.log('Args ',args)
      return doFetch({
        url: `signup`,
        method: "POST",
        config: {body: JSON.stringify(data)},
        useCache,
        showSpinner,
        spinner: 'SIGNUP_USER',
        errorMessage: "Unable to register user. Please try again later.",
        successMessage: "Successfully registered user.",
        ...args,
      });
    }
  );