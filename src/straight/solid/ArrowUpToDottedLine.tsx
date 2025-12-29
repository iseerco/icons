import React from 'react';
import type { IconProps } from '../../types';

export const ArrowUpToDottedLine: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M3,1c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm11,1c.552,0,1-.448,1-1s-.448-1-1-1-1,.448-1,1,.448,1,1,1Zm-4,0c.552,0,1-.448,1-1s-.448-1-1-1-1,.448-1,1,.448,1,1,1Zm-4,0c.552,0,1-.448,1-1s-.448-1-1-1-1,.448-1,1,.448,1,1,1ZM22,0c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-4,0c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-7.414,4.586l-5.5,5.5,1.414,1.414,4.5-4.5V24h2V7l4.5,4.5,1.414-1.414-5.5-5.5c-.779-.78-2.049-.78-2.828,0Z"/></svg>
);

ArrowUpToDottedLine.displayName = 'ArrowUpToDottedLine';
