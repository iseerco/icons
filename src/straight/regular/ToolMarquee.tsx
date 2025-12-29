import React from 'react';
import type { IconProps } from '../../types';

export const ToolMarquee: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 24h-6v-2h4v-4h2zm0-21a3 3 0 0 0 -3-3h-3v2h3a1 1 0 0 1 1 1v3h2zm0 6h-2v6h2zm-18 13h-4v-4h-2v6h6zm-4-19a1 1 0 0 1 1-1h3v-2h-3a3 3 0 0 0 -3 3v3h2zm0 6h-2v6h2zm13-9h-6v2h6zm0 22h-6v2h6z"/></svg>
);

ToolMarquee.displayName = 'ToolMarquee';
