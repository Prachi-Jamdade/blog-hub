import axios from "axios";
import { MEDIUM_TOKEN, DEVTO_TOKEN } from "react-native-dotenv";
const mediumBaseURL = "https://api.medium.com/v1";
const devToBaseURL = "https://dev.to/api";
const hashNodeBaseURL = "https://api.hashnode.com";

const mediumAPI = axios.create({ baseURL: mediumBaseURL });
const devToAPI = axios.create({ baseURL: devToBaseURL });
const hashNodeAPI = axios.create({ baseURL: hashNodeBaseURL });

const getMediumAPIWithToken = async () => {
  const mediumAPIWithToken = axios.create({ baseURL: mediumBaseURL });
  mediumAPIWithToken.interceptors.request.use(async (req) => {
    const mediumToken = MEDIUM_TOKEN;
    req.headers.Authorization = `Bearer ${mediumToken}`;
    return req;
  });

  return mediumAPIWithToken;
};

const getDevToAPIWithAPIKey = async () => {
  const devToAPIWithToken = axios.create({ baseURL: devToBaseURL });
  devToAPIWithToken.interceptors.request.use(async (req) => {
    const devToToken = DEVTO_TOKEN;
    req.headers["Api-Key"] = devToToken;
    return req;
  });

  return devToAPIWithToken;
};

export { getMediumAPIWithToken, mediumAPI, devToAPI, getDevToAPIWithAPIKey };
