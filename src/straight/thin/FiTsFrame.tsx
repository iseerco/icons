import React from 'react';
import type { IconProps } from '../../types';

export const FiTsFrame: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m24,4v-1h-3V0h-1v3H4V0h-1v3H0v1h3v16H0v1h3v3h1v-3h16v3h1v-3h3v-1h-3V4h3Zm-4,16H4V4h16v16Z"/>
</svg>
);

FiTsFrame.displayName = 'FiTsFrame';
