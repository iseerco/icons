import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBeer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,9H19V5.5A1.5,1.5,0,0,0,17.5,4H16.29a2.779,2.779,0,0,0-1.3-1.6A3.136,3.136,0,0,0,13.2,2.013,1.592,1.592,0,0,1,11.76,1.4a3.509,3.509,0,0,0-5.947.622A2.955,2.955,0,0,0,2.685,4H1.5A1.5,1.5,0,0,0,0,5.5v13A5.506,5.506,0,0,0,5.5,24h8a5.506,5.506,0,0,0,5.287-4H20a4,4,0,0,0,4-4V13A4,4,0,0,0,20,9Zm-4,9.5A2.5,2.5,0,0,1,13.5,21h-8A2.5,2.5,0,0,1,3,18.5V7h.5A1.5,1.5,0,0,1,5,8.5V13a2,2,0,0,0,4,0V8.5A1.5,1.5,0,0,1,10.5,7H16ZM21,16a1,1,0,0,1-1,1H19V12h1a1,1,0,0,1,1,1Z"/></svg>

);
