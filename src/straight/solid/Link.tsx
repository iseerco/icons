import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Link = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7.028,24a7.024,7.024,0,0,1-4.97-11.992L6.319,7.741,7.734,9.155,3.472,13.42a5.028,5.028,0,0,0,7.111,7.109l4.262-4.262,1.414,1.414L12,21.943A7.01,7.01,0,0,1,7.028,24Z"/><path d="M17.68,16.26l-1.414-1.414,4.262-4.262A5.028,5.028,0,0,0,16.974,2h0a4.993,4.993,0,0,0-3.554,1.472L9.154,7.735,7.74,6.32l4.265-4.262A6.983,6.983,0,0,1,16.973,0h0a7.027,7.027,0,0,1,4.967,12Z"/><rect x="6.976" y="11.001" width="10.047" height="2" transform="translate(-4.971 12) rotate(-45)"/></svg>

);
