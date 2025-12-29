import React from 'react';
import type { IconProps } from '../../types';

export const Inboxes: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,24H3c-1.65,0-3-1.35-3-3V13H8v2c0,1.1,.9,2,2,2h4c1.1,0,2-.9,2-2v-2h8v8c0,1.65-1.35,3-3,3Zm0-13H3c-1.65,0-3-1.35-3-3V0H8V2c0,1.1,.9,2,2,2h4c1.1,0,2-.9,2-2V0h8V8c0,1.65-1.35,3-3,3Z"/></svg>
);

Inboxes.displayName = 'Inboxes';
