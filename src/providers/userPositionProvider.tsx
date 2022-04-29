import { UserPositionContext } from "@/contexts/userPositionContext";
import React from "react";
import { useUserLocationCoords } from "@/hooks/useUserLocationCoords";

type UserPositionProviderProps = {
  children: React.ReactNode;
};

export function UserPositionProvider({ children }: UserPositionProviderProps) {
  const { userPosition } = useUserLocationCoords();
  return (
    <UserPositionContext.Provider value={userPosition}>
      {children}
    </UserPositionContext.Provider>
  );
}
