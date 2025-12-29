import React from 'react';
import type { IconProps } from '../../types';

export const FiBrMapPin: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18,6c0-3.309-2.691-6-6-6S6,2.691,6,6c0,2.791,1.915,5.143,4.5,5.81v10.69c0,.829,.671,1.5,1.5,1.5s1.5-.671,1.5-1.5V11.81c2.585-.668,4.5-3.019,4.5-5.81Zm-6,3c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Z"/></svg>
);

FiBrMapPin.displayName = 'FiBrMapPin';
