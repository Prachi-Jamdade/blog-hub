import { strings } from "../../Utils/Strings";
import { getDevToAPIWithAPIKey } from "../axios";

async function createDevToPost(
  title,
  published,
  body_markdown,
  tags,
  series,
  main_image,
  canonical_url,
  description
) {
  const body = {
    article: {
      title: title,
      published: published,
      body_markdown: body_markdown,
      tags: tags,
      series: series,
      main_image: main_image,
      canonical_url: canonical_url,
      description: description,
    },
  };
  const devToAPIWithAPIKey = await getDevToAPIWithAPIKey();
  const res = await devToAPIWithAPIKey.post("/articles", body);
  return res.data;
}

export { createDevToPost };
