import React from 'react';
import type { IconProps } from '../../types';

export const AlignLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_02_align_left" data-name="02 align left"><rect y="4" width={size} height={size}/><rect y="9" width={size} height={size}/><rect y="19" width={size} height={size}/><rect y="14" width={size} height={size}/></g></svg>
);

AlignLeft.displayName = 'AlignLeft';
