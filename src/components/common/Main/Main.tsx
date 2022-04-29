import React, { useContext, useEffect } from "react";
import { UserPositionContext } from "@/contexts/userPositionContext";
import { useWeatherInfo } from "@/hooks/useWeatherInfo";
import { MainContainer } from "@/styles";

type MainProps = {
  children?: React.ReactNode;
};

export function Main({ children }: MainProps) {
  const userPosition = useContext(UserPositionContext);
  const { weatherInfo, getWeatherInYourRegion } = useWeatherInfo();

  useEffect(() => {
    if (userPosition.latitude && userPosition.longitude) {
      getWeatherInYourRegion(userPosition);
    }
  }, [userPosition]);

  if (!userPosition.latitude) return <div>Loading...</div>;

  return (
    <MainContainer>
      {children}
      <div>latitude: {userPosition && userPosition.latitude}</div>
      <div>longitude: {userPosition && userPosition.longitude}</div>
      <div>{weatherInfo && weatherInfo.description}</div>
      <img
        alt="wicon"
        src={`http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
      />
    </MainContainer>
  );
}
