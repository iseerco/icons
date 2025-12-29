import React from 'react';
import type { IconProps } from '../../types';

export const Fax: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M8,24H0V7c0-1.65,1.35-3,3-3h2c1.65,0,3,1.35,3,3V24Zm2-14v14h14V10H10Zm4.5,11c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5,.67,1.5,1.5-.67,1.5-1.5,1.5Zm0-5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5,.67,1.5,1.5-.67,1.5-1.5,1.5Zm5,5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5,.67,1.5,1.5-.67,1.5-1.5,1.5Zm0-5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5,.67,1.5,1.5-.67,1.5-1.5,1.5Zm-1.5-10V0h-5c-1.65,0-3,1.35-3,3v5h14v-2h-6ZM20,.09v3.91h3.91L20,.09Z"/></svg>
);

Fax.displayName = 'Fax';
