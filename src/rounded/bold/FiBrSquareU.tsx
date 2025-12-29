import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSquareU = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5,0H5.5C2.467,0,0,2.468,0,5.5v13c0,3.032,2.467,5.5,5.5,5.5h13c3.033,0,5.5-2.468,5.5-5.5V5.5c0-3.032-2.467-5.5-5.5-5.5Zm2.5,18.5c0,1.379-1.122,2.5-2.5,2.5H5.5c-1.378,0-2.5-1.121-2.5-2.5V5.5c0-1.379,1.122-2.5,2.5-2.5h13c1.378,0,2.5,1.121,2.5,2.5v13Zm-3-12v6.5c0,3.309-2.691,6-6,6s-6-2.691-6-6v-6.5c0-.828.671-1.5,1.5-1.5s1.5.672,1.5,1.5v6.5c0,1.654,1.346,3,3,3s3-1.346,3-3v-6.5c0-.828.671-1.5,1.5-1.5s1.5.672,1.5,1.5Z"/></svg>

);
