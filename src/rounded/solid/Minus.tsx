import React from 'react';
import type { IconProps } from '../../types';

export const Minus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width={size} height={size} {...props}>
<g>
	<path d="M490.667,234.667H21.333C9.551,234.667,0,244.218,0,256c0,11.782,9.551,21.333,21.333,21.333h469.333   c11.782,0,21.333-9.551,21.333-21.333C512,244.218,502.449,234.667,490.667,234.667z"/>
</g>















</svg>
);

Minus.displayName = 'Minus';
