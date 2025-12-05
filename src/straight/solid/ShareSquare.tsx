import React from 'react';
import type { IconProps } from '../../types';

export const ShareSquare: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.41,9.41l-6.61,6.61-1.41-1.41,5.61-5.61H11c-.55,0-1,.45-1,1v8h-2V10c0-1.65,1.35-3,3-3h10L15.44,1.44,16.86,.03l6.56,6.56c.78,.78,.78,2.05,0,2.83Zm-11.41,4.62v5.96H6V10c0-1.13,.39-2.16,1.03-3H3c-1.65,0-3,1.35-3,3v14H17v-4.96l-5-5Z"/></svg>
);

ShareSquare.displayName = 'ShareSquare';
