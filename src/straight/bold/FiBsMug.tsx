import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMug = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,10.5A3.5,3.5,0,0,0,20.5,7H19V4h1V1H0V4H1V19.5A3.5,3.5,0,0,0,4.5,23h11A3.5,3.5,0,0,0,19,19.5V18h5ZM15.5,20H4.5a.5.5,0,0,1-.5-.5V10H14V7H4V4H16V19.5A.5.5,0,0,1,15.5,20ZM21,15H19V10h1.5a.5.5,0,0,1,.5.5Z"/></svg>

);
