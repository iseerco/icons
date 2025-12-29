import React from 'react';
import type { IconProps } from '../../types';

export const GripLinesVertical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m16,24h-2V0h2v24ZM10,0h-2v24h2V0Z"/></svg>
);

GripLinesVertical.displayName = 'GripLinesVertical';
