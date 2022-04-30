import axios from "axios";
import { useState } from "react";
import { endpoints } from "@/api/routes";
import type { UserLocation, IWheather } from "./types";

export const useWeatherInfo = () => {
  const [weatherInfo, setWeatherInfo] = useState<IWheather>({
    description: "",
    icon: "",
  });

  const getWeatherInYourRegion = async ({
    latitude,
    longitude,
  }: UserLocation): Promise<void> => {
    try {
      const { data } = await axios.get(
        endpoints.getWheather({ latitude, longitude })
      );
      setWeatherInfo(data.weather[0]);
    } catch (e: any) {
      throw new Error(e);
    }
  };

  return { weatherInfo, getWeatherInYourRegion };
};
