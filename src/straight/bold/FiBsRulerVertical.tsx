import React from 'react';
import type { IconProps } from '../../types';

export const FiBsRulerVertical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M10.5,.03C8.57,.03,7,1.601,7,3.53V20.53c0,1.93,1.57,3.5,3.5,3.5h7.5V.03h-7.5Zm0,21c-.275,0-.5-.225-.5-.5V3.53c0-.275,.225-.5,.5-.5h4.5v2h-3v3h3v2.5h-3v3h3v2.5h-3v3h3v2h-4.5Z"/></svg>
);

FiBsRulerVertical.displayName = 'FiBsRulerVertical';
