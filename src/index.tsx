import React from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import { myTheme } from "./style/theme";

const PageContainer = styled.div`
  color: ${(props) => props.theme.colors.main};
`;

async function appStart() {
  ReactDOM.render(
    <ThemeProvider theme={myTheme}>
      <PageContainer>Coming soon</PageContainer>
    </ThemeProvider>,
    document.getElementById("root")
  );
}

appStart();
