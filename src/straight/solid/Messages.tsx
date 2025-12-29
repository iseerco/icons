import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Messages = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3.34,19.643l3.963-2.643h10.697V3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3v14.854c0,.793.435,1.519,1.134,1.894.318.171.667.255,1.015.255.416,0,.831-.121,1.191-.36ZM24,7v14.854c0,.793-.435,1.519-1.134,1.894-.318.171-.667.255-1.015.256-.416,0-.831-.121-1.19-.36l-3.964-2.644H6v-.727l1.908-1.273h12.092V4h1c1.654,0,3,1.346,3,3Z"/></svg>

);
