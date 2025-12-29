import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSquareExclamation: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m20.5,0H3.5C1.57,0,0,1.57,0,3.5v20.5h24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H3V3.5c0-.275.225-.5.5-.5h17c.275,0,.5.225.5.5v17.5Zm-10.5-5h3v3h-3v-3Zm0-11h3v9h-3V5Z"/></svg>
);

FiBsSquareExclamation.displayName = 'FiBsSquareExclamation';
