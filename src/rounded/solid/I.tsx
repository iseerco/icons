import React from 'react';
import type { IconProps } from '../../types';

export const I: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18,22h-5V2h5c.553,0,1-.448,1-1s-.447-1-1-1H6c-.553,0-1,.448-1,1s.447,1,1,1h5V22H6c-.553,0-1,.448-1,1s.447,1,1,1h12c.553,0,1-.448,1-1s-.447-1-1-1Z"/></svg>
);

I.displayName = 'I';
