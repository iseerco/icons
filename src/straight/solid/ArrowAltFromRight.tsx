import React from 'react';
import type { IconProps } from '../../types';

export const ArrowAltFromRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,3V11H6V6L.445,11.083c-.593,.532-.593,1.461,0,1.993l5.555,5.083v-5.159H22v8h2V3h-2Z"/></svg>
);

ArrowAltFromRight.displayName = 'ArrowAltFromRight';
