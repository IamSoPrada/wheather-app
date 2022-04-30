import React, { useContext, useEffect } from "react";
import { CardContainer, CardTitle, CardDescr } from "@/styles";
import { UserPositionContext } from "@/contexts/UserPositionContext";
import { useWeatherInfo } from "@/hooks/useWeatherInfo";

type CardProps = {
  children?: React.ReactNode;
};

export function Card({ children }: CardProps) {
  const userPosition = useContext(UserPositionContext);
  const { weatherInfo, getWeatherInYourRegion } = useWeatherInfo();

  useEffect(() => {
    if (userPosition.latitude && userPosition.longitude) {
      getWeatherInYourRegion(userPosition);
    }
  }, [userPosition]);

  if (!userPosition.latitude) return <CardContainer>Loading...</CardContainer>;
  return (
    <CardContainer>
      {children}
      <CardTitle>latitude: </CardTitle> {userPosition && userPosition.latitude}
      <CardTitle>longitude: </CardTitle>
      <CardDescr>{userPosition && userPosition.longitude}</CardDescr>
      <CardTitle color="#c3c3c3">wheather:</CardTitle>
      <CardDescr>{weatherInfo && weatherInfo.description}</CardDescr>
      <div>
        <img
          alt="wicon"
          src={`http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
        />
      </div>
    </CardContainer>
  );
}
