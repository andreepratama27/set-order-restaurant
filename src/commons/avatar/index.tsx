import React from 'react';
import {View, Image} from 'react-native';

import styled from 'styled-components/native';

type AvatarProps = {
  source: string;
  width: number;
  height: number;
};

const Wrapper = styled.View`
  width: ${props => props.width};
  height: ${props => props.height};
`;

const Picture = styled.Image`
  width: 100%;
  height: 100%;
`;

const Avatar = (props: AvatarProps) => (
  <Wrapper {...props}>
    <Picture source={props.source} />
  </Wrapper>
);

Wrapper.defaultProps = {
  width: 30,
  height: 30,
  borderRadius: 30,
};

Picture.defaultProps = {
  borderRadius: 30,
};

export default Avatar;
