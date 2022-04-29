export type UserLocation = {
  latitude: number | string;
  longitude: number | string;
};

export type UserLocationCoords = {
  coords: {
    latitude: number;
    longitude: number;
  };
};

export type IWheather = {
  description: string;
  icon: string;
};
