import React from 'react';
import type { IconProps } from '../../types';

export const FlagAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.903,0H3C1.346,0,0,1.346,0,3V24H2V15H23.903l-5.651-7.5L23.903,0Zm-4.011,13H2V3c0-.552,.449-1,1-1H19.892l-4.144,5.5,4.144,5.5Z"/></svg>
);

FlagAlt.displayName = 'FlagAlt';
