import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTerminal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12.04,12L2.1,21.95-.02,19.82l7.82-7.82L-.02,4.18,2.1,2.05,12.04,12Zm-1.04,7v3h13v-3H11Z"/></svg>
);

FiBsTerminal.displayName = 'FiBsTerminal';
