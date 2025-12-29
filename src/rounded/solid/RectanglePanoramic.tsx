import React from 'react';
import type { IconProps } from '../../types';

export const RectanglePanoramic: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.5,5H5.5A5.506,5.506,0,0,0,0,10.5v3A5.506,5.506,0,0,0,5.5,19h13A5.506,5.506,0,0,0,24,13.5v-3A5.506,5.506,0,0,0,18.5,5ZM21,13.5A2.5,2.5,0,0,1,18.5,16H5.5A2.5,2.5,0,0,1,3,13.5v-3A2.5,2.5,0,0,1,5.5,8h13A2.5,2.5,0,0,1,21,10.5Z"/></svg>
);

RectanglePanoramic.displayName = 'RectanglePanoramic';
