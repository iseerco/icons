import React from 'react';
import type { IconProps } from '../../types';

export const FiBsInputNumeric: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m9,7v10h-2v-6.621l-1.284,1.318-1.433-1.395,3.215-3.303h1.501Zm15-1.5v16.5H0V5.5c0-1.93,1.57-3.5,3.5-3.5h17c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.275-.224-.5-.5-.5H3.5c-.276,0-.5.225-.5.5v13.5h18V5.5Z"/></svg>
);

FiBsInputNumeric.displayName = 'FiBsInputNumeric';
