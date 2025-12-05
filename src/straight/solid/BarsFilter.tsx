import React from 'react';
import type { IconProps } from '../../types';

export const BarsFilter: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,4H0V2H24v2Zm-8,16H8v2h8v-2Zm4-9H4v2H20v-2Z"/></svg>
);

BarsFilter.displayName = 'BarsFilter';
