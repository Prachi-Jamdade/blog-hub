import axios from "axios";
import { MEDIUM_TOKEN, DEVTO_TOKEN, HASHNODE_TOKEN } from "react-native-dotenv";
const mediumBaseURL = "https://api.medium.com/v1";
const devToBaseURL = "https://dev.to/api";
const hashnodeBaseURL = "https://gql.hashnode.com";

const mediumAPI = axios.create({ baseURL: mediumBaseURL });
const devToAPI = axios.create({ baseURL: devToBaseURL });
const hashnodeAPI = axios.create({ baseURL: hashnodeBaseURL });

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

const getHashnodeAPIWithToken = async () => {
  const hashnodeAPIWithToken = axios.create({ baseURL: hashnodeBaseURL });
  hashnodeAPIWithToken.interceptors.request.use(async (req) => {
    const hashnodeToken = HASHNODE_TOKEN;
    console.log("TOKEN", hashnodeToken);
    req.headers.Authorization = `Bearer ${hashnodeToken}`;
    return req;
  });
};

export {
  getMediumAPIWithToken,
  mediumAPI,
  devToAPI,
  getDevToAPIWithAPIKey,
  hashnodeAPI,
  getHashnodeAPIWithToken,
};
