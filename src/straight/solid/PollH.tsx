import React from 'react';
import type { IconProps } from '../../types';

export const PollH: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3C1.35,0,0,1.35,0,3V24H24V3c0-1.65-1.35-3-3-3ZM5,5H13v2H5v-2Zm0,4h11v2H5v-2Zm4,10H5v-2h4v2Zm10-4H5v-2h14v2Z"/></svg>
);

PollH.displayName = 'PollH';
