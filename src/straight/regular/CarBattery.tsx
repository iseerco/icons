import React from 'react';
import type { IconProps } from '../../types';

export const CarBattery: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M4,11h6v2H4ZM18,9H16v2H14v2h2v2h2V13h2V11H18Zm6-1V22H0V8A3,3,0,0,1,3,5V2h8V5h2V2h8V5A3,3,0,0,1,24,8ZM22,8a1,1,0,0,0-1-1H19V4H15V7H9V4H5V7H3A1,1,0,0,0,2,8V20H22Z"/></svg>
);

CarBattery.displayName = 'CarBattery';
