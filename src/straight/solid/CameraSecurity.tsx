import React from 'react';
import type { IconProps } from '../../types';

export const CameraSecurity: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m15,10c0,1.654-1.346,3-3,3s-3-1.346-3-3,1.346-3,3-3,3,1.346,3,3Zm7,10h-5.698c.719.771,1.238,1.738,1.459,2.824l.239,1.176H6l.239-1.176c.221-1.086.74-2.054,1.459-2.824H2V3c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v17Zm-5-10c0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5,5-2.243,5-5Z"/></svg>
);

CameraSecurity.displayName = 'CameraSecurity';
