import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSquare5: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12.5,19H7v-3h5.5c.827,0,1.5-.673,1.5-1.5s-.673-1.5-1.5-1.5H7V5h9v3h-6v2h2.5c2.481,0,4.5,2.019,4.5,4.5s-2.019,4.5-4.5,4.5ZM24,3.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5V24H24V3.5ZM3,3.5c0-.276,.224-.5,.5-.5H20.5c.276,0,.5,.224,.5,.5V21H3V3.5Z"/></svg>
);

FiBsSquare5.displayName = 'FiBsSquare5';
