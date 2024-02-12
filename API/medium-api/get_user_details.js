import { getMediumAPIWithToken } from "../axios";

async function getMediumUserDetails() {
  const mediumAPIWithToken = await getMediumAPIWithToken();
  const res = await mediumAPIWithToken.get("/me");
  return res.data;
}

export { getMediumUserDetails };
