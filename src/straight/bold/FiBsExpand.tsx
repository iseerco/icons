import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsExpand = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,21H16v3h5.546A2.457,2.457,0,0,0,24,21.545V16H21Z"/><path d="M0,2.455V8H3V3H8V0H2.454A2.457,2.457,0,0,0,0,2.455Z"/><path d="M3,16H0v5.545A2.457,2.457,0,0,0,2.454,24H8V21H3Z"/><path d="M21.546,0H16V3h5V8h3V2.455A2.457,2.457,0,0,0,21.546,0Z"/></svg>

);
