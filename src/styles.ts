import styled from "styled-components";

type AppContainerProps = {
  backgroundImageUrl?: string;
};

export const AppContainer = styled.div<AppContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background: ${(props) =>
    props.backgroundImageUrl ? `url(${props.backgroundImageUrl})` : undefined};
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
