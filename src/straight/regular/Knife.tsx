import React from 'react';
import type { IconProps } from '../../types';

export const Knife: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22.679.155a2.219,2.219,0,0,0-2.445.558L-.023,22.61l1.467,1.358,5.5-5.941,0,.046C19.958,16.885,24,6.242,24,2.5V2.145A2.091,2.091,0,0,0,22.679.155ZM22,2.5c0,1.878-2.323,11.141-12.957,13.254L21.694,2.079A.232.232,0,0,1,21.866,2a.19.19,0,0,1,.073.013c.031.011.062.024.062.127Z"/></svg>
);

Knife.displayName = 'Knife';
