import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSignalAlt1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,6H11A2,2,0,0,0,9,8V24h6V8A2,2,0,0,0,13,6Z"/><path d="M22,0H20a2,2,0,0,0-2,2V24h6V2A2,2,0,0,0,22,0Zm0,22H20V2h2Z"/><path d="M4,12H2a2,2,0,0,0-2,2V24H6V14A2,2,0,0,0,4,12Z"/></svg>

);
