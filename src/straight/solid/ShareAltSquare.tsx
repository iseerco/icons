import React from 'react';
import type { IconProps } from '../../types';

export const ShareAltSquare: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m15,7c0-.551.448-1,1-1s1,.449,1,1-.448,1-1,1-1-.449-1-1Zm-8,4c-.552,0-1,.449-1,1s.448,1,1,1,1-.449,1-1-.448-1-1-1Zm9,7c.552,0,1-.449,1-1s-.448-1-1-1-1,.449-1,1,.448,1,1,1ZM24,3v21H0V3C0,1.346,1.346,0,3,0h18c1.654,0,3,1.346,3,3Zm-14.042,8.5l4.057-2.254c.529.468,1.224.753,1.985.753,1.654,0,3-1.346,3-3s-1.346-3-3-3-3,1.346-3,3c0,.17.015.337.042.5l-4.057,2.254c-.529-.468-1.224-.753-1.985-.753-1.654,0-3,1.346-3,3s1.346,3,3,3c.761,0,1.456-.285,1.985-.753l4.057,2.254c-.027.163-.042.329-.042.5,0,1.654,1.346,3,3,3s3-1.346,3-3-1.346-3-3-3c-.761,0-1.456.285-1.985.753l-4.057-2.254c.027-.163.042-.329.042-.5s-.015-.337-.042-.5Z"/></svg>
);

ShareAltSquare.displayName = 'ShareAltSquare';
