import React from 'react';
import type { IconProps } from '../../types';

export const FiTsDistributeSpacingVertical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,3H0v-1H24v1Zm0,18H0v1H24v-1Zm-4-14H4v10H20V7Zm-15,1h14v8H5V8Z"/></svg>
);

FiTsDistributeSpacingVertical.displayName = 'FiTsDistributeSpacingVertical';
