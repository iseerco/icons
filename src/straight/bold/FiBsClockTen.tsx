import React from 'react';
import type { IconProps } from '../../types';

export const FiBsClockTen: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-21C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Zm2,3h-3v3.896l-1.76-1.021-1.505,2.596,6.265,3.632V6Z"/></svg>
);

FiBsClockTen.displayName = 'FiBsClockTen';
