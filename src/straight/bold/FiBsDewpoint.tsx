import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDewpoint = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,24A10,10,0,0,1,2.929,6.929L10,.013l7.06,6.9a10.014,10.014,0,0,1,.011,14.154h0A9.934,9.934,0,0,1,10,24ZM10,4.209,5.038,9.062A7,7,0,1,0,14.95,9.05ZM19,2.5A2.5,2.5,0,1,0,21.5,0,2.5,2.5,0,0,0,19,2.5Z"/></svg>

);
