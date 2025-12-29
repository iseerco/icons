import React from 'react';
import type { IconProps } from '../../types';

export const KeyboardBrightness: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17,18H7v-2h10v2ZM13,4h-2v6h2V4ZM4,16H0v2H4v-2Zm20,0h-4v2h4v-2Zm-2.29-7.29l-1.41-1.41-4.05,4.05,1.41,1.41,4.05-4.05Zm-13.95,2.64L3.71,7.29l-1.41,1.41,4.05,4.05,1.41-1.41Z"/></svg>
);

KeyboardBrightness.displayName = 'KeyboardBrightness';
