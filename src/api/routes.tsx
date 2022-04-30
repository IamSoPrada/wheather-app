import type { UserLocation } from "@/hooks/types";

export const endpoints = {
  getWheather: ({ latitude, longitude }: UserLocation) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
      import.meta.env.VITE_OPEN_WHEATHER_API_KEY
    }`;
  },

  getGeneratedMap: ({ latitude, longitude }: UserLocation) => {
    return `https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/${longitude},${latitude},10/1080x1000@2x?access_token=${
      import.meta.env.VITE_MAPBOX_API_KEY
    }`;
  },
};
