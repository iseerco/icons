import React from 'react';
import type { IconProps } from '../../types';

export const Rhombus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,2.828,21.172,12,12,21.172,2.828,12,12,2.828M12,0,0,12,12,24,24,12,12,0Z"/></svg>
);

Rhombus.displayName = 'Rhombus';
