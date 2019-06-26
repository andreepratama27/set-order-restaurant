import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components/native";

import { Colors } from "styles";

type ButtonProps = {
  bgColor: "string";
};

export const Button = styled.TouchableOpacity`
  height: 40px;
  border-radius: 4px;
  background-color: ${(props: ButtonProps) =>
    props.bgColor ? props.bgColor : Colors.light}
  align-items: center;
  justify-content: center;
`;
