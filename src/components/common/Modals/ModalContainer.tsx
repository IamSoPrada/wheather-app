import React, { useContext, useState, useEffect } from "react";
import { ModalContainerLayer, CardContainer } from "@/styles";
import { UserPositionContext } from "@/contexts/UserPositionContext";

type ModalContainerProps = {
  children?: React.ReactNode;
};

export function ModalContainer({ children }: ModalContainerProps) {
  const userPosition = useContext(UserPositionContext);
  const [isModalHidden, setIsModalHidden] = useState<boolean>(true);

  useEffect(() => {
    if (!userPosition.latitude) {
      setIsModalHidden(false);
    } else {
      setIsModalHidden(true);
    }
  }, [userPosition]);
  return (
    <ModalContainerLayer isHidden={isModalHidden}>
      <CardContainer>{children}</CardContainer>
    </ModalContainerLayer>
  );
}
