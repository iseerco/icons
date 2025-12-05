import React from 'react';
import type { IconProps } from '../../types';

export const FiBsFrancSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M7,3.5v6.5h11v3H7v3h6v3H7v5h-3v-5H0v-3H4V3.5c0-1.93,1.57-3.5,3.5-3.5h14.5V3H7.5c-.28,0-.5,.22-.5,.5Z"/></svg>
);

FiBsFrancSign.displayName = 'FiBsFrancSign';
