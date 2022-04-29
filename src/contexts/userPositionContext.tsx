import { createContext } from "react";
import type { UserLocation } from "@/hooks/types";

export const UserPositionContext = createContext<UserLocation>({
  latitude: "",
  longitude: "",
});
