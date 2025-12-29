import React from 'react';
import type { IconProps } from '../../types';

export const AlignJustify: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_04_align_center" data-name="04 align center"><rect y="4" width={size} height={size}/><rect y="9" width={size} height={size}/><rect y="19" width={size} height={size}/><rect y="14" width={size} height={size}/></g></svg>
);

AlignJustify.displayName = 'AlignJustify';
