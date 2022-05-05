import axios from "axios";
import { endpoints } from "@/api/endpoints";
import { useState, useContext, useEffect } from "react";
import { UserPositionContext } from "@/contexts/UserPositionContext";
import type { NewArticle } from "./types";

export const useLocalNews = () => {
  const [news, setNews] = useState<NewArticle[]>([]);
  const userPosition = useContext(UserPositionContext);
  const getLocalNews = async () => {
    const { data } = await axios.get(endpoints.getLocalNews());
    setNews(data.articles);
  };

  useEffect(() => {
    if (userPosition.latitude !== "") {
      getLocalNews();
    }
  }, [userPosition]);
  return [...news];
};
