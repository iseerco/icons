import React from 'react';
import type { IconProps } from '../../types';

export const FiBrZoomIn: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Bold" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width={size} height={size} {...props}>
<path d="M288,192h-32v-32c0-17.673-14.327-32-32-32s-32,14.327-32,32v32h-32c-17.673,0-32,14.327-32,32s14.327,32,32,32h32v32  c0,17.673,14.327,32,32,32s32-14.327,32-32v-32h32c17.673,0,32-14.327,32-32S305.673,192,288,192z"/>
<path d="M502.661,457.569l-99.046-99.067c74.18-99.06,54.01-239.499-45.05-313.678S119.067-9.187,44.887,89.873  s-54.01,239.499,45.05,313.678c79.587,59.597,188.929,59.623,268.544,0.063l99.088,99.088c12.452,12.452,32.64,12.452,45.092,0  c12.452-12.452,12.452-32.64,0-45.092L502.661,457.569z M225.116,384.49c-88.02,0-159.374-71.354-159.374-159.374  S137.097,65.742,225.116,65.742s159.374,71.354,159.374,159.374C384.397,313.097,313.098,384.397,225.116,384.49z"/>
</svg>
);

FiBrZoomIn.displayName = 'FiBrZoomIn';
