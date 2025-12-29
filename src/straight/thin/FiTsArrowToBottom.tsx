import React from 'react';
import type { IconProps } from '../../types';

export const FiTsArrowToBottom: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,23h-6.293l6.146-6.146-.707-.707-5.646,5.646V0h-1V21.793l-5.646-5.646-.707,.707,6.146,6.146H5v1h14v-1Z"/></svg>
);

FiTsArrowToBottom.displayName = 'FiTsArrowToBottom';
