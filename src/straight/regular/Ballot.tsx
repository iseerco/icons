import React from 'react';
import type { IconProps } from '../../types';

export const Ballot: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,24H2V3C2,1.346,3.346,0,5,0h14c1.654,0,3,1.346,3,3V24Zm-18-2H20V3c0-.551-.449-1-1-1H5c-.551,0-1,.449-1,1V22ZM18,5h-6v2h6v-2Zm0,6h-6v2h6v-2Zm0,6h-6v2h6v-2ZM10,4H6v4h4V4Zm0,6H6v4h4v-4Zm0,6H6v4h4v-4Z"/></svg>
);

Ballot.displayName = 'Ballot';
