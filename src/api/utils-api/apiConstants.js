export const BASE_URL = "http://localhost:8080/api";

export const HTTP_METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const REQUEST_HEADER_KEY = {
  CONTENT_TYPE: "Content-Type",
  CACHE_CONTROL: "cache-control",
};

export const REQUEST_HEADER_VALUE = {
  APPLICATION_JSON: "application/json",
  CHARSET_UTF8: "charset=UTF-8",
  NO_CACHE: "no-cache",
};

export const USER_API_ROUTE = {
  LOGIN: "/login",
  SIGNUP: "/sign-up",
  LOGOUT: "/logout",
};

export const RESTAURANT_API_ROUTE = {
  RESTAURANT: "/restaurant",
  SORT_RESTAURANT: "restaurant/sort/"
};
