import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckRamp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,17a3.539,3.539,0,0,0-.508.051c0-.017.008-.033.008-.051V5a3,3,0,0,1,3-3,1,1,0,0,0,0-2,5.006,5.006,0,0,0-5,5V16.279L.684,22.051a1,1,0,0,0,.632,1.9l16.306-5.436A3.5,3.5,0,1,0,20.5,17Z"/></svg>

);
