import React from 'react';
import type { IconProps } from '../../types';

export const GripLinesVertical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m16,0v24h-2V0h2Zm-8,24h2V0h-2v24Z"/></svg>
);

GripLinesVertical.displayName = 'GripLinesVertical';
