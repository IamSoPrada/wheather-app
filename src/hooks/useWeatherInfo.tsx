import axios from "axios";
import { useState } from "react";
import { endpoints } from "@/api/routes";
import type { UserLocation, IWheather } from "./types";

export const useWeatherInfo = () => {
  const [weatherInfo, setWeatherInfo] = useState<IWheather>({
    description: "",
    icon: "",
    city: "",
    temperature: "",
  });

  const fToC = (temp: number) => {
    return `${Math.trunc(temp - 273.15)}\xB0C`;
  };
  const getWeatherInYourRegion = async ({
    latitude,
    longitude,
  }: UserLocation): Promise<void> => {
    try {
      const { data } = await axios.get(
        endpoints.getWheather({ latitude, longitude })
      );
      setWeatherInfo({
        city: data.name,
        temperature: fToC(data.main.temp),
        ...data.weather[0],
      });
    } catch (e: any) {
      throw new Error(e);
    }
  };

  return { weatherInfo, getWeatherInYourRegion };
};
