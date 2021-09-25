import { utilsApi, apiConstants } from "./utils-api";
import * as utils from "../utils";
var user = utils.getFromLocalStorage("user");

export async function doLogin(
  { email, password },
  successCallback,
  failureCallback
) {
  if (email && password) {
    const userData = {
      email: email,
      password: password,
    };

    try {
      await utilsApi.sendApiRequest(
        apiConstants.HTTP_METHOD.POST,
        apiConstants.USER_API_ROUTE.LOGIN,
        null,
        null,
        userData,
        null,
        successCallback,
        failureCallback
      );
    } catch (error) {
      if (failureCallback) {
        failureCallback(error);
      }
    }
  }
}

export async function doSignup(
  { firstName, lastName, email, password },
  successCallback,
  failureCallback
) {
  if (email && password) {
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    try {
      await utilsApi.sendApiRequest(
        apiConstants.HTTP_METHOD.POST,
        apiConstants.USER_API_ROUTE.SIGNUP,
        null,
        null,
        userData,
        null,
        successCallback,
        failureCallback
      );
    } catch (error) {
      if (failureCallback) {
        failureCallback(error);
      }
    }
  }
}

export async function doLogout(userId, successCallback, failureCallback) {
  if (userId) {
    const userData = {
      id: userId,
    };

    try {
      await utilsApi.sendApiRequest(
        apiConstants.HTTP_METHOD.POST,
        apiConstants.USER_API_ROUTE.LOGOUT,
        null,
        null,
        userData,
        { "x-access-token": user.token },
        successCallback,
        failureCallback
      );
    } catch (error) {
      if (failureCallback) {
        failureCallback(error);
      }
    }
  }
}
