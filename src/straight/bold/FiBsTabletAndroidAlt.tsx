import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTabletAndroidAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m18.5,0H5.5c-1.93,0-3.5,1.57-3.5,3.5v20.5h20V3.5c0-1.93-1.57-3.5-3.5-3.5ZM5.5,3h13c.275,0,.5.224.5.5v12.5H5V3.5c0-.276.225-.5.5-.5Zm-.5,16h5v2h-5v-2Zm9,2v-2h5v2h-5Z"/>
</svg>
);

FiBsTabletAndroidAlt.displayName = 'FiBsTabletAndroidAlt';
