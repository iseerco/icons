import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBellConcierge: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m24,18v-3.5c0-6.109-4.589-11.166-10.5-11.906V0h-3v2.594C4.589,3.334,0,8.391,0,14.5v3.5h10.5v2H0v3h24v-3h-10.5v-2h10.5ZM3,14.5c0-4.962,4.038-9,9-9s9,4.038,9,9v.5H3v-.5Z"/></svg>
);

FiBsBellConcierge.displayName = 'FiBsBellConcierge';
