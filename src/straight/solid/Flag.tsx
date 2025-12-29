import React from 'react';
import type { IconProps } from '../../types';

export const Flag: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 4v13h-11a3 3 0 0 1 -2.816-2h3.816a2 2 0 0 0 2-2v-9zm-22 9h12v-10a3 3 0 0 0 -3-3h-11v24h2z"/></svg>
);

Flag.displayName = 'Flag';
