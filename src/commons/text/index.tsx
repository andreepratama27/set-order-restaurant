import React from "react";
import { Text } from "react-native";
import { Colors } from "styles";

import styled from "styled-components/native";

type TextProps = {
  isWhite: "boolean";
  isBold: "boolean";
  isSemibold: "boolean";
  size: "number";
  color: "string";
};

export const Title = styled.Text`
  font-size: ${(props: TextProps) => (props.size ? props.size : "14px")};
  font-family: ${(props: TextProps) =>
    props.isBold ? "SFUIText-Bold" : "SFUIText-Regular"};
  color: ${(props: TextProps) => (props.color ? props.color : Colors.dark)};
`;

export const Caption = styled.Text`
  font-size: 12px;
  font-family: "SFUIText-Light";
`;

export const P = styled.Text`
  font-size: 14px;
  font-family: "SFUIText-Regular";
  color: ${Colors.text};
`;
