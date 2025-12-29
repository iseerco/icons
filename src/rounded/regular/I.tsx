import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const I = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,22h-5V2h5c1.308-.006,1.307-1.995,0-2H6c-1.308,.006-1.307,1.995,0,2h5V22H6c-1.308,.006-1.307,1.995,0,2h12c1.308-.006,1.307-1.995,0-2Z"/></svg>

);
