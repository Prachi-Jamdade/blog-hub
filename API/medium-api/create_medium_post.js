import { strings } from "../../Utils/Strings";
import { getValueFor } from "../../Utils/handleValues";
import { getMediumAPIWithToken } from "../axios";

async function createMediumPost(
  title,
  contentFormat,
  content,
  canonicalUrl,
  tags,
  publishStatus,
  notifyFollowers
) {
  const body = {
    title: title,
    contentFormat: contentFormat,
    content: content,
    canonicalUrl: canonicalUrl,
    tags: tags,
    publishStatus: publishStatus,
    notifyFollowers: notifyFollowers,
  };
  const { userID } = strings.medium;
  const id = getValueFor(userID);

  const mediumAPIWithToken = await getMediumAPIWithToken();
  const res = await mediumAPIWithToken.post(`/users/${id}/posts`, body);
  return res.data;
}

async function createMediumPostUnderPublication(
  title,
  contentFormat,
  content,
  canonicalUrl,
  tags,
  publishStatus,
  notifyFollowers
) {
  const body = {
    title: title,
    contentFormat: contentFormat,
    content: content,
    canonicalUrl: canonicalUrl,
    tags: tags,
    publishStatus: publishStatus,
    notifyFollowers: notifyFollowers,
  };

  const { publicationID } = strings.medium;
  const pubID = getValueFor(publicationID);

  const mediumAPIWithToken = await getMediumAPIWithToken();
  const res = await mediumAPIWithToken.post(
    `/publications/${pubID}/posts`,
    body
  );
  return res.data;
}
export { createMediumPost, createMediumPostUnderPublication };
