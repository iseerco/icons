import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBriefcase = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,3H18V2.454A2.457,2.457,0,0,0,15.546,0H8.455A2.457,2.457,0,0,0,6,2.454V3H3A3,3,0,0,0,0,6V24H24V6A3,3,0,0,0,21,3Zm0,3v5H3V6ZM3,21V14h7v2h4V14h7v7Z"/></svg>

);
