import { GlobalTheme } from "../theme";
import styled from "styled-components/native";
import { ITitleColor, ITouchable } from "./interface";

export const Touchable = styled.TouchableOpacity<ITouchable>`
  gap: 16px;
  height: 60px;
  padding: 8px 24px;
  flex-direction: row;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  width: ${({ dense }) => (dense ? "auto" : "100%")};
  background-color: ${({ type, variant }) =>
    variant === "filled"
      ? GlobalTheme?.light?.main?.[type as never]
      : "transparent"};

  border: ${({ variant }) =>
    variant === "text"
      ? "0px"
      : variant === "dashed"
      ? `3px dashed ${GlobalTheme?.light?.border?.secondary}`
      : variant === "outline"
      ? `3px solid ${GlobalTheme?.light?.border?.secondary}`
      : `3px solid ${GlobalTheme?.light?.border?.default}`};
`;

export const Title = styled.Text<ITitleColor>`
  font-size: 24px;
  font-family: CarterOne;
  text-transform: uppercase;
  color: ${({ color, variant }) =>
    variant === "filled"
      ? GlobalTheme?.light?.color?.[color as never]
      : GlobalTheme?.light?.color?.secondary};
`;

export const IconPreview = styled.Image`
  width: 24px;
  height: 24px;
`;
