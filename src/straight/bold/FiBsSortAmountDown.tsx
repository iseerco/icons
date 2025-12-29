import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSortAmountDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><rect x="10" y="13" width={size} height={size}/><rect x="10" y="7" width={size} height={size}/><rect x="10" y="1" width={size} height={size}/><path d="M7,0h-3V19H0l4.597,4.591c.544,.545,1.427,.545,1.972,0h0l4.594-4.592H7V0Z"/></svg>
);

FiBsSortAmountDown.displayName = 'FiBsSortAmountDown';
