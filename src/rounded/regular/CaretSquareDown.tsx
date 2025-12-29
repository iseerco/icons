import React from 'react';
import type { IconProps } from '../../types';

export const CaretSquareDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,24H5a5.006,5.006,0,0,1-5-5V5A5.006,5.006,0,0,1,5,0H19a5.006,5.006,0,0,1,5,5V19A5.006,5.006,0,0,1,19,24ZM5,2A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5a3,3,0,0,0-3-3Zm1.269,8.6,5.087,5.154a.9.9,0,0,0,1.288,0L17.731,10.6a.924.924,0,0,0-.644-1.575H6.913A.924.924,0,0,0,6.269,10.6Z"/></svg>
);

CaretSquareDown.displayName = 'CaretSquareDown';
