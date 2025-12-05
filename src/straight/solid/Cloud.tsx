import React from 'react';
import type { IconProps } from '../../types';

export const Cloud: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17.792,7.212A8,8,0,0,0,2,9a7.915,7.915,0,0,0,.9,3.671A5.49,5.49,0,0,0,5.5,23H16A8,8,0,0,0,17.792,7.212Z"/></svg>
);

Cloud.displayName = 'Cloud';
