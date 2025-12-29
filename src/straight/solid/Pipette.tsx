import React from 'react';
import type { IconProps } from '../../types';

export const Pipette: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 3.023a3 3 0 0 1 -.886 2.138l-3.407 3.407a3.455 3.455 0 0 0 -.071 4.837l-1.436 1.395-9-9 1.4-1.436a3.456 3.456 0 0 0 4.837-.071l3.402-3.407a3.094 3.094 0 0 1 4.276 0 3 3 0 0 1 .885 2.137zm-22.087 14.658a3.074 3.074 0 0 0 -.582 3.574l-1.331 1.331 1.414 1.414 1.331-1.331a3.074 3.074 0 0 0 3.574-.582l8.049-8.049-4.406-4.406z"/></svg>
);

Pipette.displayName = 'Pipette';
