import React from 'react';
import type { IconProps } from '../../types';

export const ValueAbsolute: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m17.707,7.707l-4.293,4.293,4.293,4.293-1.414,1.414-4.293-4.293-4.293,4.293-1.414-1.414,4.293-4.293-4.293-4.293,1.414-1.414,4.293,4.293,4.293-4.293,1.414,1.414ZM0,24h2V0H0v24ZM22,0v24h2V0h-2Z"/></svg>
);

ValueAbsolute.displayName = 'ValueAbsolute';
