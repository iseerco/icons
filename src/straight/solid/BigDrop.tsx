import React from 'react';
import type { IconProps } from '../../types';

export const BigDrop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="M16,22h3v2H5v-2h3V12h8v10Zm8-14v2H0v-2H2v-2c0-1.654,1.346-3,3-3h4L12,0l3,3h4.004c1.65,0,2.997,1.343,3,2.993l.006,2.007h1.99ZM7,6h-2v2h2v-2Zm4,0h-2v2h2v-2Zm4,0h-2v2h2v-2Zm4,0h-2v2h2v-2Z"/>
</svg>
);

BigDrop.displayName = 'BigDrop';
