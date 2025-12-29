import React from 'react';
import type { IconProps } from '../../types';

export const Mug: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,6H19V3h1V1H0V3H1V20a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V17h5V9A3,3,0,0,0,21,6ZM16,21H4a1,1,0,0,1-1-1V8H15V6H3V3H17V20A1,1,0,0,1,16,21Zm6-6H19V8h2a1,1,0,0,1,1,1Z"/></svg>
);

Mug.displayName = 'Mug';
