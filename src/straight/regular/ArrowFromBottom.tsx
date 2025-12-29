import React from 'react';
import type { IconProps } from '../../types';

export const ArrowFromBottom: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13,22V2.823l4.3,4.3,1.414-1.414L13.768.763a2.5,2.5,0,0,0-3.536,0l-4.95,4.95L6.7,7.127l4.3-4.3V22H5v2H19V22Z"/></svg>
);

ArrowFromBottom.displayName = 'ArrowFromBottom';
