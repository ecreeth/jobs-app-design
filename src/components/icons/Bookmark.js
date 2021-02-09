import React from 'react';
import {Path} from 'react-native-svg';
import BaseSvgIcon from './BaseSvgIcon';

const BookmarkIcon = props => (
  <BaseSvgIcon {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
    />
  </BaseSvgIcon>
);

export default BookmarkIcon;
