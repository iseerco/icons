import React from 'react';
import type { IconProps } from '../../types';

export const FiTsTotal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m21,4v-1.5c0-.827-.673-1.5-1.5-1.5H3.176l10,11L3.176,23h16.324c.827,0,1.5-.673,1.5-1.5v-1.5h1v1.5c0,1.379-1.121,2.5-2.5,2.5H2v-1.193l9.824-10.807L2,1.193V0h17.5c1.379,0,2.5,1.122,2.5,2.5v1.5h-1Z"/>
</svg>
);

FiTsTotal.displayName = 'FiTsTotal';
