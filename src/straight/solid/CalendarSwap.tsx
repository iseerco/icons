import React from 'react';
import type { IconProps } from '../../types';

export const CalendarSwap: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="M0,8v-3c0-1.654,1.346-3,3-3h3V0h2V2h8V0h2V2h3c1.654,0,3,1.346,3,3v3H0Zm24,2v14H0V10H24Zm-7,8.207H6.836l4.207,4.207,1.414-1.414-.793-.793h5.336v-2Zm.164-2l-4.207-4.207-1.414,1.414,.793,.793H7v2h10.164Z"/>
</svg>
);

CalendarSwap.displayName = 'CalendarSwap';
