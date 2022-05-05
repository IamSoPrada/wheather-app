import React from "react";
import { useLocalNews } from "@/hooks/useLocalNews";
import { MainContainer, ArticlesContainer } from "@/styles";
import { Card } from "@/components/Card";
import { ArticleCard } from "@/components/ArticleCard";
import type { NewArticle } from "@/hooks/types";

type MainProps = {
  children?: React.ReactNode;
};

export function Main({ children }: MainProps) {
  /*   const news = useLocalNews();
  console.log(news); */
  return (
    <MainContainer>
      {children}
      <Card />
      {/* <ArticlesContainer>
        {news &&
          news.map((article: NewArticle) => (
            <ArticleCard
              key={article.url}
              url={article.url}
              publishedAt={article.publishedAt}
              title={article.title}
              description={article.description}
              author={article.author}
              urlToImage={article.urlToImage}
            />
          ))}
      </ArticlesContainer> */}
    </MainContainer>
  );
}
