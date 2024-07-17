import styled from "styled-components/native";
import { ITypographyLabel } from "./interface";
import { GlobalTheme, TThemeColor } from "../theme";

export const TypographyLabel = styled.Text<ITypographyLabel>`
  font-family: CarterOne;
  font-size: ${({ size }) => size};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => `${GlobalTheme?.light?.color[color as TThemeColor]}`};
`;
