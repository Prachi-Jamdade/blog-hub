import { strings } from "../../Utils/Strings";
import { getValueFor } from "../../Utils/handleValues";
import { getMediumAPIWithToken } from "../axios";

async function getUsersPublications() {
  const { userID: mediumUserID } = strings.medium;
  const userID = getValueFor(mediumUserID);
  const mediumAPIWithToken = await getMediumAPIWithToken();
  const res = await mediumAPIWithToken.get(`users/${userID}/publications`);
  return res.data;
}

export { getUsersPublications };
