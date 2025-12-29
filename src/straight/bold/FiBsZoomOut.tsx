import React from 'react';
import type { IconProps } from '../../types';

export const FiBsZoomOut: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Isolation_Mode" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width={size} height={size} {...props}>
<rect x="128" y="192" width={size} height={size}/>
<path d="M403.494,358.373c74.08-99,53.879-239.309-45.121-313.389S119.064-8.895,44.984,90.105S-8.895,329.414,90.105,403.494  c79.523,59.506,188.745,59.506,268.268,0l108.341,108.341l45.121-45.036L403.494,358.373z M225.049,384.375  c-87.993,0-159.326-71.333-159.326-159.326S137.056,65.723,225.049,65.723s159.326,71.333,159.326,159.326  C384.293,313.008,313.008,384.293,225.049,384.375z"/>
</svg>
);

FiBsZoomOut.displayName = 'FiBsZoomOut';
