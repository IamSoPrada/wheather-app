import React from "react";
import { CardContainer, CardTitle, CardDescr, CardLink } from "@/styles";
import type { NewArticle } from "@/hooks/types";

type ArticleCardProps = NewArticle;

export function ArticleCard({
  title,
  description,
  author,
  source,
  url,
  urlToImage,
}: ArticleCardProps) {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescr>{description}</CardDescr>
      <CardDescr>{author}</CardDescr>
      <CardDescr>{source}</CardDescr>
      {urlToImage && (
        <div>
          <img src={urlToImage} width="100" height="100" alt="Article img" />
        </div>
      )}
      <CardLink href={url} />
    </CardContainer>
  );
}
