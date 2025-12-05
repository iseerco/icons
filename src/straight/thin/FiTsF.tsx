import React from 'react';
import type { IconProps } from '../../types';

export const FiTsF: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M4.5,1H22V0H4.5c-1.378,0-2.5,1.122-2.5,2.5V24h1V13h15v-1H3V2.5c0-.827,.673-1.5,1.5-1.5Z"/></svg>
);

FiTsF.displayName = 'FiTsF';
