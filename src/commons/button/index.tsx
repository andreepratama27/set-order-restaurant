import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components/native";

import { Colors } from "styles";

export const Primary = styled.TouchableOpacity`
  height: 40px;
  border-radius: 4px;
  background-color: ${Colors.warning};
  align-items: center;
  justify-content: center;
`;
