import React from 'react';
import type { IconProps } from '../../types';

export const AlignCenter: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><rect y="4" width={size} height={size}/><rect x="4" y="9" width={size} height={size}/><rect x="4" y="19" width={size} height={size}/><rect y="14" width={size} height={size}/></g></svg>
);

AlignCenter.displayName = 'AlignCenter';
