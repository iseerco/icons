import React from 'react';
import type { IconProps } from '../../types';

export const FiBrMenuDots: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width={size} height={size} {...props}>
<g>
	<circle cx="458.667" cy="256" r="53.333"/>
	<circle cx="256" cy="256" r="53.333"/>
	<circle cx="53.333" cy="256" r="53.333"/>
</g>















</svg>
);

FiBrMenuDots.displayName = 'FiBrMenuDots';
