import React from 'react';
import type { IconProps } from '../../types';

export const FiBsAd: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M7.5,12.459l.971,2.541h-1.942l.971-2.541Zm9.5,1.541c-.551,0-1,.449-1,1s.449,1,1,1,1-.449,1-1-.449-1-1-1Zm7-8.5V22H0V5.5c0-1.93,1.57-3.5,3.5-3.5H20.5c1.93,0,3.5,1.57,3.5,3.5Zm-10.814,13.5L8,5h-1L1.814,19h3.186l.382-1h4.236l.382,1h3.186Zm7.814-14h-3v6.142c-.322-.084-.653-.142-1-.142-2.206,0-4,1.794-4,4s1.794,4,4,4h4V5Z"/></svg>
);

FiBsAd.displayName = 'FiBsAd';
