import React from 'react';
import type { IconProps } from '../../types';

export const ChessClock: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,5V3H15V5H7V3H9V1H3V3H5V5H3A3,3,0,0,0,0,8V21H2v2H4V21H20v2h2V21h2V8A3,3,0,0,0,21,5ZM10.843,14.482a3.5,3.5,0,1,1,.022-1.894L8,13.54Zm8.68.752L17,14l1.169,2.558A3.456,3.456,0,0,1,16.5,17,3.5,3.5,0,1,1,20,13.5,3.465,3.465,0,0,1,19.523,15.234Z"/></svg>
);

ChessClock.displayName = 'ChessClock';
