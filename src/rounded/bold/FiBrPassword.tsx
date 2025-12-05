import React from 'react';
import type { IconProps } from '../../types';

export const FiBrPassword: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m16 16.5a1.5 1.5 0 0 1 -1.5 1.5h-5a1.5 1.5 0 0 1 0-3h5a1.5 1.5 0 0 1 1.5 1.5zm-7.061-3.939a1.5 1.5 0 0 0 2.122 0l.939-.94.939.94a1.5 1.5 0 0 0 2.122-2.122l-.94-.939.94-.939a1.5 1.5 0 0 0 -2.122-2.122l-.939.94-.939-.94a1.5 1.5 0 0 0 -2.122 2.122l.94.939-.94.939a1.5 1.5 0 0 0 0 2.122zm-3.439 2.439h-4a1.5 1.5 0 0 0 0 3h4a1.5 1.5 0 0 0 0-3zm1.061-8.561a1.5 1.5 0 0 0 -2.122 0l-.939.94-.939-.94a1.5 1.5 0 0 0 -2.122 2.122l.94.939-.94.939a1.5 1.5 0 0 0 2.122 2.122l.939-.94.939.94a1.5 1.5 0 0 0 2.122-2.122l-.94-.939.94-.939a1.5 1.5 0 0 0 0-2.122zm15.939 8.561h-4a1.5 1.5 0 0 0 0 3h4a1.5 1.5 0 0 0 0-3zm.121-5.5.94-.939a1.5 1.5 0 0 0 -2.122-2.122l-.939.94-.939-.94a1.5 1.5 0 0 0 -2.122 2.122l.94.939-.94.939a1.5 1.5 0 0 0 2.122 2.122l.939-.94.939.94a1.5 1.5 0 0 0 2.122-2.122z"/></svg>
);

FiBrPassword.displayName = 'FiBrPassword';
