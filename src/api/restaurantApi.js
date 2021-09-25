import { utilsApi, apiConstants } from "./utils-api";
import * as utils from "../utils";
var user = utils.getFromLocalStorage("user");

export async function searchRestaurant(data, successCallback, failureCallback) {
  try {
    await utilsApi.sendApiRequest(
      apiConstants.HTTP_METHOD.POST,
      apiConstants.RESTAURANT_API_ROUTE.RESTAURANT,
      null,
      { data: data },
      null,
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

export async function sortRestaurant(sort, successCallback, failureCallback) {
  try {
    await utilsApi.sendApiRequest(
      apiConstants.HTTP_METHOD.GET,
      apiConstants.RESTAURANT_API_ROUTE.SORT_RESTAURANT,
      null,
      { sort: sort },
      null,
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
