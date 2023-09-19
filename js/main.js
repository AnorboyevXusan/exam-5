export const baseURL = "https://650948b4f6553137159b2970.mockapi.io/api/v1/"

const request = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});

export default request;
