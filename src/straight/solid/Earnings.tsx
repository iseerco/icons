import React from 'react';
import type { IconProps } from '../../types';

export const Earnings: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,0H13V2h7.586L0,22.586,1.414,24,22,3.414V11h2V2A2,2,0,0,0,22,0Z"/><path d="M6,10A4,4,0,1,0,2,6,4,4,0,0,0,6,10ZM6,4A2,2,0,1,1,4,6,2,2,0,0,1,6,4Z"/><path d="M18,14a4,4,0,1,0,4,4A4,4,0,0,0,18,14Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,20Z"/></svg>
);

Earnings.displayName = 'Earnings';
