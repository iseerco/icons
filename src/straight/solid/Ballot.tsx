import React from 'react';
import type { IconProps } from '../../types';

export const Ballot: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,0H5c-1.654,0-3,1.346-3,3V24H22V3c0-1.654-1.346-3-3-3ZM10,20H6v-4h4v4Zm0-6H6v-4h4v4Zm0-6H6V4h4v4Zm8,11h-6v-2h6v2Zm0-6h-6v-2h6v2Zm0-6h-6v-2h6v2Z"/></svg>
);

Ballot.displayName = 'Ballot';
