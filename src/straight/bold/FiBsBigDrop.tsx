import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBigDrop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="M24,12v-3h-2v-2.5c0-1.93-1.57-3.5-3.5-3.5h-3.5S12,0,12,0l-3,3h0s-3.5,0-3.5,0c-1.93,0-3.5,1.57-3.5,3.5v2.5H0v3H9v9h-4v3h14v-3h-4V12h9ZM5,6.5c0-.276,.224-.5,.5-.5h13c.276,0,.5,.224,.5,.5v2.5H5v-2.5Z"/>
</svg>
);

FiBsBigDrop.displayName = 'FiBsBigDrop';
