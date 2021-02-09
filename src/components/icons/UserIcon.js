import React from 'react';
import {Path} from 'react-native-svg';
import BaseSvgIcon from './BaseSvgIcon';

const UserIcon = props => (
  <BaseSvgIcon {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </BaseSvgIcon>
);

export default UserIcon;
