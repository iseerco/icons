import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MemoPad = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m2,7v12c0,2.757,2.243,5,5,5h10c2.757,0,5-2.243,5-5V7H2Zm10,11h-4c-.552,0-1-.447-1-1s.448-1,1-1h4c.552,0,1,.447,1,1s-.448,1-1,1Zm4-5h-8c-.552,0-1-.447-1-1s.448-1,1-1h8c.552,0,1,.447,1,1s-.448,1-1,1Zm6-8H2C2,2.243,4.243,0,7,0h10c2.757,0,5,2.243,5,5Z"/></svg>

);
