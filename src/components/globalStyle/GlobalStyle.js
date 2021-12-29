import { createGlobalStyle } from "styled-components";
import bgImg from "../../assets/images/bg.png";

export const GlobalStyle = createGlobalStyle`
body {
  background:url(${bgImg}) center no-repeat;
  background-size: cover;
  color: #FFFFFF;
  padding:0;
  margin:0;
  font-family: 'Pushster', cursive;
}
`;
