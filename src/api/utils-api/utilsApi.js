import axios from "../axiosConfig";

const buildUrlWithPathParameters = (pathParameters) => {
  if (pathParameters && pathParameters.length !== 0) {
    let pathParametersString = "";
    for (let i = 0; i < pathParameters.length; i++) {
      pathParametersString += `/${pathParameters[i]}`;
    }
    return pathParametersString;
  } else {
    return "";
  }
};

const buildUrlWithUrlParameters = (urlParameters) => {
  if (!urlParameters) {
    return "";
  } else {
    let urlParametersString = "";
    for (let key in urlParameters) {
      if (urlParametersString) {
        urlParametersString += "&";
      }
      urlParametersString += key + "=" + encodeURIComponent(urlParameters[key]);
    }
    urlParametersString = "?" + urlParametersString;
    return urlParametersString;
  }
};

export const sendApiRequest = async (
  requestMethod,
  requestUrl,
  pathParameters,
  urlParameters,
  requestDataBody,
  requestHeaders,
  successCallback,
  failureCallback
) => {
  const url =
    requestUrl +
    buildUrlWithPathParameters(pathParameters) +
    buildUrlWithUrlParameters(urlParameters);
  try {
    const response = await axios({
      method: requestMethod,
      url: url,
      data: requestDataBody,
      headers: requestHeaders,
    });
    if (response && response.statusText === "OK") {
      if (successCallback) {
        successCallback(response);
      }
    }
  } catch (error) {
    if (failureCallback) {
      if (error && error.request && error.request.responseText) {
        const errorMessage = JSON.parse(error.request.responseText).message;
        failureCallback(error, errorMessage);
      } else {
        failureCallback(error);
      }
      return;
    }
    throw error;
  }
};
