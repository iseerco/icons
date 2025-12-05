import React from 'react';
import type { IconProps } from '../../types';

export const Road: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.276,2.48A3,3,0,0,0,17.321,0H6.681A2.994,2.994,0,0,0,3.726,2.483L-.039,24h24.1ZM13,21H11V17h2Zm0-7H11V10h2Zm0-7H11V3h2Z"/></svg>
);

Road.displayName = 'Road';
