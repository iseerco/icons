import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,5h-9V3h1a1.5,1.5,0,0,0,0-3h-5a1.5,1.5,0,0,0,0,3h1V5h-9a1.5,1.5,0,0,0,0,3H2V18.5A5.506,5.506,0,0,0,7.5,24h9A5.506,5.506,0,0,0,22,18.5V8h.5a1.5,1.5,0,0,0,0-3ZM19,18.5A2.5,2.5,0,0,1,16.5,21h-9A2.5,2.5,0,0,1,5,18.5V8H19Z"/></svg>

);
