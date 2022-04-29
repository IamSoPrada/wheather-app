import { useState, useEffect } from "react";
import type { UserLocation, UserLocationCoords } from "./types";

export const useUserLocationCoords = () => {
  const [userPosition, setUserPosition] = useState<UserLocation>({
    latitude: "",
    longitude: "",
  });

  const showPosition = (obj: UserLocationCoords): void => {
    const coords = {
      latitude: obj.coords.latitude,
      longitude: obj.coords.longitude,
    };
    setUserPosition(coords);
  };

  const getUserLocation = (): void => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return { userPosition };
};
