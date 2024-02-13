import { getDevToAPIWithAPIKey } from "../axios";

async function getDevToUserDetails() {
  const devToAPIWithAPIKey = await getDevToAPIWithAPIKey();
  const res = await devToAPIWithAPIKey.get("/users/me");
  return res.data;
}

export { getDevToUserDetails };
