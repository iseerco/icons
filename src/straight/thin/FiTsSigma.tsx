import React from 'react';
import type { IconProps } from '../../types';

export const FiTsSigma: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m19.5,24H2v-1.2l10.309-10.8L2,1.2V0h17.5c1.379,0,2.5,1.122,2.5,2.5v2.5h-1v-2.5c0-.827-.673-1.5-1.5-1.5H3.191l10.5,11L3.191,23h16.309c.827,0,1.5-.673,1.5-1.5v-2.5h1v2.5c0,1.378-1.121,2.5-2.5,2.5Z"/></svg>
);

FiTsSigma.displayName = 'FiTsSigma';
