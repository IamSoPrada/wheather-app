import React from "react";

import { MainContainer } from "@/styles";
import { Card } from "@/components/Card";

type MainProps = {
  children?: React.ReactNode;
};

export function Main({ children }: MainProps) {
  return (
    <MainContainer>
      {children}
      <Card />
    </MainContainer>
  );
}
