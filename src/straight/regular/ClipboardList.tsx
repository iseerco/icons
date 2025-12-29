import React from 'react';
import type { IconProps } from '../../types';

export const ClipboardList: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M11,12h6v2h-6v-2ZM21,2V21c0,1.654-1.346,3-3,3H6c-1.654,0-3-1.346-3-3V2h5.171c.413-1.164,1.525-2,2.829-2h2c1.304,0,2.416,.836,2.829,2h5.171Zm-2,2h-5v-1c0-.552-.449-1-1-1h-2c-.551,0-1,.448-1,1v1H5V21c0,.552,.449,1,1,1h12c.551,0,1-.448,1-1V4Zm-8,6h6v-2h-6v2Zm0,8h6v-2h-6v2ZM7,10h2v-2h-2v2Zm0,4h2v-2h-2v2Zm0,4h2v-2h-2v2Z"/></svg>
);

ClipboardList.displayName = 'ClipboardList';
