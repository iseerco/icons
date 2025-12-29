import React from 'react';
import type { IconProps } from '../../types';

export const LineWidth: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m21.5 24h-19a2.5 2.5 0 0 1 -2.5-2.5 2.5 2.5 0 0 1 2.5-2.5h19a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5zm2.5-10a2 2 0 0 0 -2-2h-20a2 2 0 0 0 0 4h20a2 2 0 0 0 2-2zm0-6.5a1.5 1.5 0 0 0 -1.5-1.5h-21a1.5 1.5 0 0 0 -1.5 1.5 1.5 1.5 0 0 0 1.5 1.5h21a1.5 1.5 0 0 0 1.5-1.5zm0-5.5a1 1 0 0 0 -1-1h-22a1 1 0 0 0 0 2h22a1 1 0 0 0 1-1z"/></svg>
);

LineWidth.displayName = 'LineWidth';
