import React from 'react';
import type { IconProps } from '../../types';

export const Tachometer: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,1C.373.981-4.414,16.17,5.112,22.818L5.371,23H18.629l.259-.182C28.418,16.167,23.621.98,12,1Zm0,14a1.994,1.994,0,1,1,.512-3.926l4.781-4.781,1.414,1.414-4.781,4.781A2,2,0,0,1,12,15Z"/></svg>
);

Tachometer.displayName = 'Tachometer';
