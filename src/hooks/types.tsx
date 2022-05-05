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
  city: string;
  temperature: string;
};

export type NewArticle = {
  key: string;
  url: string;
  title: string;
  author: string;
  description: string;
  source?: string;
  urlToImage: string;
  publishedAt: string;
};
