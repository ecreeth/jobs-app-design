import React from 'react';
import Svg from 'react-native-svg';

const BaseSvgIcon = props => (
  <Svg
    fill="none"
    stroke="#333"
    width="27"
    height="27"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  />
);
export default BaseSvgIcon;
