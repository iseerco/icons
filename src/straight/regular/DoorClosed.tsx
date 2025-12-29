import React from 'react';
import type { IconProps } from '../../types';

export const DoorClosed: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20,22V3c0-1.654-1.346-3-3-3H7c-1.654,0-3,1.346-3,3V22H0v2H24v-2h-4ZM6,3c0-.551,.448-1,1-1h10c.552,0,1,.449,1,1V22H6V3Zm10,9c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Z"/></svg>
);

DoorClosed.displayName = 'DoorClosed';
