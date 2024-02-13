import { strings } from "../../Utils/Strings";
import { getValueFor } from "../../Utils/handleValues";
import { getDevToAPIWithAPIKey } from "../axios";

async function updateArticle(
  title,
  published,
  content,
  tags,
  series,
  main_image,
  canonical_url,
  description
) {
  const { userID } = strings.devto;
  const id = getValueFor(userID);

  const body = {
    article: {
      title: title,
      published: published,
      content: content,
      tags: tags,
      series: series,
      main_image: main_image,
      description: description,
      canonical_url: canonical_url,
    },
  };

  const devToAPIWithAPIKey = await getDevToAPIWithAPIKey();
  const res = await devToAPIWithAPIKey.put(`articles/${id}`, body);
  return res.data;
}

export { updateArticle };
