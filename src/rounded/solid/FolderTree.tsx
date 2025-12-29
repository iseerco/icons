import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderTree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,8v-1H2V15c0,1.654,1.346,3,3,3h5v-2c0-1.654,1.346-3,3-3h2.586c.534,0,1.036,.208,1.414,.586l1.414,1.414h2.586c1.654,0,3,1.346,3,3v3c0,1.654-1.346,3-3,3H13c-1.654,0-3-1.346-3-3v-1H5c-2.757,0-5-2.243-5-5V1C.006-.308,1.995-.307,2,1V5H10V3c0-1.654,1.346-3,3-3h2.586c.534,0,1.036,.208,1.414,.586l1.414,1.414h2.586c1.654,0,3,1.346,3,3v3c0,1.654-1.346,3-3,3H13c-1.654,0-3-1.346-3-3Z"/></svg>

);
