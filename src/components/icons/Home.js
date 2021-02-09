import React from 'react';
import {Path} from 'react-native-svg';
import BaseSvgIcon from './BaseSvgIcon';

const HomeIcon = props => (
  <BaseSvgIcon {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </BaseSvgIcon>
);

export default HomeIcon;
