import React from 'react';
import type { IconProps } from '../../types';

export const FiBrRoomService: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23,19.092V16A11.007,11.007,0,0,0,13.5,5.115V4.31a1.995,1.995,0,1,0-3,0v.805A11.007,11.007,0,0,0,1,16v3.092A1.5,1.5,0,0,0,1.5,22h21A1.5,1.5,0,0,0,23,19.092ZM12,8a8.009,8.009,0,0,1,8,8v3H4V16A8.009,8.009,0,0,1,12,8Z"/></svg>
);

FiBrRoomService.displayName = 'FiBrRoomService';
