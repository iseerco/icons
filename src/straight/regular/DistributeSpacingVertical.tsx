import React from 'react';
import type { IconProps } from '../../types';

export const DistributeSpacingVertical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,4H0V2H24v2Zm0,16H0v2H24v-2Zm-4-13H4v10H20V7Zm-14,2h12v6H6v-6Z"/></svg>
);

DistributeSpacingVertical.displayName = 'DistributeSpacingVertical';
