import React from 'react';
import type { IconProps } from '../../types';

export const FiTsGrill: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,6.5v-.5H0v.5c0,4.915,2.455,8.996,6.222,11.056l-3.222,6.444h1.041l3.016-6.031c1.352,.603,2.848,.959,4.443,1.021v5.011h1v-5.011c1.595-.062,3.091-.418,4.443-1.021l3.016,6.031h1.041l-3.222-6.444c3.768-2.06,6.222-6.141,6.222-11.056Zm-12,11.5C5.787,18,1.234,13.404,1.009,7H22.991c-.226,6.404-4.778,11-10.991,11Zm.5-14h-1V0h1V4Zm4.5,0h-1V0h1V4Zm-9,0h-1V0h1V4Z"/></svg>
);

FiTsGrill.displayName = 'FiTsGrill';
