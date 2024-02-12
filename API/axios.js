import axios from "axios";
import { REACT_APP_MEDIUM_TOKEN } from "react-native-dotenv";
const mediumBaseURL = "https://api.medium.com/v1";
const devToBaseURL = "https://dev.to/api";
const hashNodeBaseURL = "https://api.hashnode.com";

const mediumAPI = axios.create({ baseURL: mediumBaseURL });
const devToAPI = axios.create({ baseURL: devToBaseURL });
const hashNodeAPI = axios.create({ baseURL: hashNodeBaseURL });

const getMediumAPIWithToken = async () => {
  const mediumAPIWithToken = axios.create({ baseURL: mediumBaseURL });
  mediumAPIWithToken.interceptors.request.use(async (req) => {
    const mediumToken = REACT_APP_MEDIUM_TOKEN;
    req.headers.Authorization = `Bearer ${mediumToken}`;
    return req;
  });

  return mediumAPIWithToken;
};

export { getMediumAPIWithToken, mediumAPI };
