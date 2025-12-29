import React from 'react';
import type { IconProps } from '../../types';

export const RectangleBarcode: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,22H0V5c0-1.654,1.346-3,3-3H21c1.654,0,3,1.346,3,3V22ZM2,20H22V5c0-.551-.448-1-1-1H3c-.552,0-1,.449-1,1v15ZM6,6h-2v12h2V6Zm4,0h-2v12h2V6Zm10,0h-2v12h2V6Zm-6,0h-3v12h3V6Z"/><polygon points="16 6 15 6 15 18 16 18 16 6 16 6"/></svg>
);

RectangleBarcode.displayName = 'RectangleBarcode';
