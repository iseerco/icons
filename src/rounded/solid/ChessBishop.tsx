import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessBishop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,15c0-2.248-1.378-4.605-3.016-6.619l-5.216,6.26a1,1,0,1,1-1.536-1.282l5.416-6.5a36.111,36.111,0,0,0-3.5-3.228A2,2,0,1,0,10.807,3.6C8.814,4.987,3,9.511,3,15a8.983,8.983,0,0,0,3.356,7H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2H17.645A8.985,8.985,0,0,0,21,15Z"/></svg>

);
