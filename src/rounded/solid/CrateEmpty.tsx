import React from 'react';
import type { IconProps } from '../../types';

export const CrateEmpty: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m5,24.003h14c2.76,0,5-2.24,5-5H0c0,2.76,2.24,5,5,5Zm19-7v-2c0-1.65-1.35-3-3-3H3c-1.65,0-3,1.35-3,3v2h24Z"/>
</svg>
);

CrateEmpty.displayName = 'CrateEmpty';
