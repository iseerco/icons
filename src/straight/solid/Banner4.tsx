import React from 'react';
import type { IconProps } from '../../types';

export const Banner4: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m6,10h12v8H6v-8Zm-2-2h3v-2H0v.068l3.111,3.932-3.111,3.932v.068h4v-6Zm16,6h4v-.068s-3.111-3.932-3.111-3.932l3.111-3.932v-.068h-7v2h3s0,6,0,6Z"/>
</svg>
);

Banner4.displayName = 'Banner4';
