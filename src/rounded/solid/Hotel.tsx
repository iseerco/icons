import React from 'react';
import type { IconProps } from '../../types';

export const Hotel: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16,0H8C5.243,0,3,2.243,3,5v14c0,2.757,2.243,5,5,5h1c.552,0,1-.448,1-1v-5h-1c-.552,0-1-.448-1-1s.448-1,1-1h6c.552,0,1,.448,1,1s-.448,1-1,1h-1v5c0,.552,.448,1,1,1h1c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-6,14h-1c-.552,0-1-.448-1-1s.448-1,1-1h1c.552,0,1,.448,1,1s-.448,1-1,1Zm0-4h-1c-.552,0-1-.448-1-1s.448-1,1-1h1c.552,0,1,.448,1,1s-.448,1-1,1Zm0-4h-1c-.552,0-1-.448-1-1s.448-1,1-1h1c.552,0,1,.448,1,1s-.448,1-1,1Zm5,8h-1c-.552,0-1-.448-1-1s.448-1,1-1h1c.552,0,1,.448,1,1s-.448,1-1,1Zm0-4h-1c-.552,0-1-.448-1-1s.448-1,1-1h1c.552,0,1,.448,1,1s-.448,1-1,1Zm0-4h-1c-.552,0-1-.448-1-1s.448-1,1-1h1c.552,0,1,.448,1,1s-.448,1-1,1Z"/></svg>
);

Hotel.displayName = 'Hotel';
