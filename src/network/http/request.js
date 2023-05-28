const backend = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";

export const request = async (path, method, payload = null, headers = {}) => {
  const API = backend + path;
  const options = {};

  options.method = method;
  options.headers = headers;
  const response = await fetch(API, options);
  const data = await response.json();
  return data;
};
