import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Enter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,21V3A1,1,0,0,1,3,2H8V0H3A3,3,0,0,0,0,3V21a3,3,0,0,0,3,3H8V22H3A1,1,0,0,1,2,21Z"/><path d="M24,13l0-2-16.444.031,4.323-4.324L10.463,5.293,5.877,9.879a3,3,0,0,0,0,4.242l4.586,4.586,1.414-1.414L7.614,13.03Z"/></svg>

);
