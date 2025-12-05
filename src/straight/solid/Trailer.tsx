import React from 'react';
import type { IconProps } from '../../types';

export const Trailer: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M5,21a3,3,0,0,1,6,0A3,3,0,0,1,5,21Zm17-2V14H0v4a3,3,0,0,0,3,3c.168-6.6,9.834-6.592,10,0H24V19ZM4,4H6v8H8V4h2v8h2V4h2v8h2V4h2v8h4V3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3v9H4Z"/></svg>
);

Trailer.displayName = 'Trailer';
