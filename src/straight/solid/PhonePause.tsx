import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PhonePause = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.878,19.113l-3.171,3.172A5.893,5.893,0,0,1,16.5,24C9.252,24,0,14.748,0,7.5A5.887,5.887,0,0,1,1.717,3.292L4.887.122l6.264,6.265L7.027,10.512a12.135,12.135,0,0,0,6.453,6.469l4.133-4.133ZM22,0H20V8h2ZM18,0H16V8h2Z"/></svg>

);
