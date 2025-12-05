import React from 'react';
import type { IconProps } from '../../types';

export const FiBrPulse: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m18.5 0h-13a5.506 5.506 0 0 0 -5.5 5.5v8a5.506 5.506 0 0 0 5.5 5.5h5v2h-3a1.5 1.5 0 0 0 0 3h9a1.5 1.5 0 0 0 0-3h-3v-2h5a5.506 5.506 0 0 0 5.5-5.5v-8a5.506 5.506 0 0 0 -5.5-5.5zm2.5 13.5a2.5 2.5 0 0 1 -2.5 2.5h-13a2.5 2.5 0 0 1 -2.5-2.5v-8a2.5 2.5 0 0 1 2.5-2.5h13a2.5 2.5 0 0 1 2.5 2.5zm-2-4a1.5 1.5 0 0 1 -1.5 1.5h-1.2l-1.555 2.332a1.5 1.5 0 0 1 -1.245.668q-.047 0-.093 0a1.5 1.5 0 0 1 -1.249-.826l-1.844-3.691-.566.849a1.5 1.5 0 0 1 -1.248.668h-2a1.5 1.5 0 0 1 0-3h1.2l1.552-2.332a1.5 1.5 0 0 1 2.59.161l1.844 3.688.566-.849a1.5 1.5 0 0 1 1.248-.668h2a1.5 1.5 0 0 1 1.5 1.5z"/></svg>
);

FiBrPulse.displayName = 'FiBrPulse';
