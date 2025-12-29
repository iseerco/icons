import React from 'react';
import type { IconProps } from '../../types';

export const CheckInCalendar: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m0,8v-3c0-1.654,1.346-3,3-3h3V0h2v2h8V0h2v2h3c1.654,0,3,1.346,3,3v3H0Zm0,2v6h7.948l-1.571-1.571,1.414-1.414,2.659,2.659c.731.731.731,1.92,0,2.651l-2.659,2.659-1.414-1.414,1.571-1.571H0v6h24v-14H0Z"/>
</svg>
);

CheckInCalendar.displayName = 'CheckInCalendar';
