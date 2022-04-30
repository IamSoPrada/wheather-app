import React, { useContext, useEffect } from "react";
import { CardContainer, CardTitle, CardDescr, CardSection } from "@/styles";
import { UserPositionContext } from "@/contexts/UserPositionContext";
import { useWeatherInfo } from "@/hooks/useWeatherInfo";

type CardProps = {
  children?: React.ReactNode;
};

export function Card({ children }: CardProps) {
  const userPosition = useContext(UserPositionContext);
  const { weatherInfo, getWeatherInYourRegion } = useWeatherInfo();

  useEffect(() => {
    if (!userPosition.latitude || !userPosition.longitude) return;
    getWeatherInYourRegion(userPosition);
  }, [userPosition]);

  if (!userPosition.latitude) return <CardContainer>Loading...</CardContainer>;
  return (
    <CardContainer>
      {children}
      <CardSection>
        <CardTitle>latitude: </CardTitle>
        <CardDescr>{userPosition.latitude}</CardDescr>
      </CardSection>
      <CardSection>
        <CardTitle>longitude: </CardTitle>
        <CardDescr>{userPosition.longitude}</CardDescr>
      </CardSection>
      <CardSection>
        <CardTitle>city: </CardTitle>
        <CardDescr>{weatherInfo.city}</CardDescr>
      </CardSection>

      <CardTitle color="#c3c3c3">wheather:</CardTitle>
      <CardDescr>{weatherInfo.description}</CardDescr>
      <CardDescr>{weatherInfo.temperature}</CardDescr>

      <div>
        {weatherInfo.icon !== "" && (
          <img
            alt="wicon"
            src={`http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
          />
        )}
      </div>
    </CardContainer>
  );
}
