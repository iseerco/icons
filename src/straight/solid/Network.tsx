import React from 'react';
import type { IconProps } from '../../types';

export const Network: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 22h-9.184a2.982 2.982 0 0 1 -5.632 0h-9.184v-2h9.184a3 3 0 0 1 1.816-1.816v-4.184h-6a3 3 0 0 1 -3-3v-1h6.586l1 1h4.828l1-1h6.586v1a3 3 0 0 1 -3 3h-6v4.184a3 3 0 0 1 1.816 1.816h9.184zm-13.586-13h3.172l1-1h6.414v-5a3 3 0 0 0 -3-3h-12a3 3 0 0 0 -3 3v5h6.414z"/></svg>
);

Network.displayName = 'Network';
