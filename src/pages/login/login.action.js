import { createAsyncThunk } from "@reduxjs/toolkit";
import doFetch from "../../infrastructure/doFetch";


export const loginUser = createAsyncThunk(
    "login-user",
    async ( data, args, { useCache, showSpinner } = {}) => {
      return doFetch({
        url: `login`,
        method: "POST",
        config: {body: JSON.stringify(data)},
        useCache,
        showSpinner,
        spinner: 'LOGIN_USER',
        errorMessage: "Unable to login user. Please try again later.",
        successMessage: "Successfully logged user.",
        ...args,
      });
    }
  );

  export const googleLogin = createAsyncThunk(
    "google-login",
    async ( { useCache, showSpinner } = {}, args) => {
      return doFetch({
        url: `auth/google`,
        method: "GET",
        useCache,
        showSpinner,
        spinner: 'GOOGLE_LOGIN',
        errorMessage: "Unable to login with google. Please try again later.",
        successMessage: "Successfully logged with google.",
        ...args,
      });
    }
  );