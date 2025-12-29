import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Melon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4.6,12.175,12.173,4.6l.667.667c3.891,5.027-2.6,11.479-7.6,7.557ZM22.374,2.324A4.336,4.336,0,0,0,15.5,1.273L13.586,3.184c7.306,7.128-3.286,17.7-10.4,10.405L1.274,15.5A4.347,4.347,0,0,0,.059,19.242c.718,3.917,5.816,4.606,9.038,4.765C19.974,24.165,27.522,12.048,22.374,2.324Z"/></svg>

);
