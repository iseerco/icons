import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Archive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M19,0H5A3,3,0,0,0,2,3V24H22V3A3,3,0,0,0,19,0ZM5,2H19a1,1,0,0,1,1,1v8H4V3A1,1,0,0,1,5,2ZM4,22V13H20v9Z"/><rect x="10" y="6" width="4" height="2"/><rect x="10" y="17" width="4" height="2"/></g></svg>

);
