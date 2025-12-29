import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessQueen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3.8,8.152A10.491,10.491,0,0,1,10.16,4.181a2.5,2.5,0,1,1,3.681,0A10.441,10.441,0,0,1,20.2,8.149a7.837,7.837,0,0,0-3.358,3.326,5.98,5.98,0,0,0-9.69,0A7.836,7.836,0,0,0,3.8,8.152ZM21.449,20,24.017,9.062C20.427,9.447,18,11.777,18,15H16a4,4,0,0,0-8,0H6C6,11.777,3.573,9.447-.016,9.062L2.551,20ZM2,24H22V22H2Z"/></svg>

);
