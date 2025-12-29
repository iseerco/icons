import React from 'react';
import type { IconProps } from '../../types';

export const FiTsKeyboardBrightness: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17,17H7v-1h10v1ZM12.5,3.5h-1v6h1V3.5ZM4,16H0v1H4v-1Zm20,0h-4v1h4v-1Zm-2.65-8.15l-.71-.71-4.05,4.05,.71,.71,4.05-4.05Zm-13.95,3.34L3.35,7.15l-.71,.71,4.05,4.05,.71-.71Z"/></svg>
);

FiTsKeyboardBrightness.displayName = 'FiTsKeyboardBrightness';
