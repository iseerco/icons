import React from 'react';
import type { IconProps } from '../../types';

export const DownToLine: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24H0v-2H24v2Zm-9.86-4.89l9.82-10.11h-6.95V0H7V9H.07l9.8,10.11h0c.57,.58,1.32,.89,2.12,.89h0c.8,0,1.56-.31,2.13-.89Z"/></svg>
);

DownToLine.displayName = 'DownToLine';
