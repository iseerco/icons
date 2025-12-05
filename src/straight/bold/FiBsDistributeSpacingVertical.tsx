import React from 'react';
import type { IconProps } from '../../types';

export const FiBsDistributeSpacingVertical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,5H0V2H24v3Zm0,14H0v3H24v-3Zm-4-12H4v10H20V7Zm-13,3h10v4H7v-4Z"/></svg>
);

FiBsDistributeSpacingVertical.displayName = 'FiBsDistributeSpacingVertical';
