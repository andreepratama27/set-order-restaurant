import React from "react";
import { Text } from "react-native";
import { Colors } from "styles";

import styled from "styled-components/native";

type TextProps = {
  isWhite: "boolean";
  isBold: "boolean";
  isSemibold: "boolean";
};

export const Title = styled.Text`
  font-size: 14px;
  font-family: "Roboto-Regular";
  color: ${(props: TextProps) => (props.isWhite ? Colors.light : Colors.dark)};
  font-weight: ${(props: TextProps) => (props.isBold ? "bold" : "normal")};
`;

export const Caption = styled.Text`
  font-size: 12px;
  font-family: "Roboto-Regular";
`;

export const P = styled.Text`
  font-size: 14px;
  font-family: "Roboto-Regular";
  color: ${Colors.text};
`;
