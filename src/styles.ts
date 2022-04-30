import styled from "styled-components";

type AppContainerProps = {
  backgroundImageUrl?: string;
};

export const AppContainer = styled.div<AppContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background: ${(props) =>
    props.backgroundImageUrl ? `url(${props.backgroundImageUrl})` : "#f3f3f3"};
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 64px;
  justify-content: space-between;
  padding: 0 16px;
`;

export const MainContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 35px 16px;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  min-height: 64px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 500px;
  min-width: 300px;
  padding: 16px;
  border-radius: 8px;
  background: #f3f3f3;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  margin-bottom: 16px;
`;
type CardTitleProps = {
  color?: string;
  fontSize?: string;
};

export const CardTitle = styled.span<CardTitleProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.5rem")};
  font-weight: bold;

  color: ${(props) => (props.color ? props.color : "#000")};
`;

export const CardDescr = styled.p`
  font-size: 1rem;

  font-weight: 700;
  color: #5a5a5a;
`;
export const CardSection = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
  gap: 16px;
`;

type ModalContainerLayer = {
  isHidden?: boolean;
};

export const ModalContainerLayer = styled.div<ModalContainerLayer>`
  position: absolute;
  padding: 0 16px;
  display: ${(props) => (props.isHidden ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  z-index: 99;
  background: rgba(0, 0, 0, 0.2);
`;
