import React from 'react';
import type { IconProps } from '../../types';

export const FiTsGripLinesVertical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m8,0h1v24h-1V0Zm7,0v24h1V0h-1Z"/></svg>
);

FiTsGripLinesVertical.displayName = 'FiTsGripLinesVertical';
