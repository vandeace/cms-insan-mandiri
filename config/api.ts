import axios from "axios";
import { getSession } from "next-auth/react";

const baseURL =
  process.env.NEXT_PUBLIC_BE_URL_PRODUCTION || "http://localhost:3000/api";
const ApiClient = () => {
  const defaultOptions = {
    baseURL,
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(async (request) => {
    const session = await getSession();
    if (session) {
      request.headers.Authorization = `Bearer ${session.token}`;
    }
    return request;
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(`error`, error);
    },
  );

  return instance;
};

export default ApiClient();
