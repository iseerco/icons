import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Book = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M20,0H5A3,3,0,0,0,2,3V21a3,3,0,0,0,3,3H22V2A2,2,0,0,0,20,0Zm0,18H8V2H20ZM5,2H6V18H5.017A3,3,0,0,0,4,18.187V3A1,1,0,0,1,5,2ZM5,22a1,1,0,0,1-1-.992h.015a1,1,0,0,1,1-1.008H20v2Z"/></g></svg>

);
