import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Laptop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,15.184V8a5.006,5.006,0,0,0-5-5H7A5.006,5.006,0,0,0,2,8v7.184A2.993,2.993,0,0,0,3,21H21a2.993,2.993,0,0,0,1-5.816ZM7,5H17a3,3,0,0,1,3,3v7H15.849a2,2,0,0,0-1.528.708L14.074,16H9.925l-.246-.292A2,2,0,0,0,8.151,15H4V8A3,3,0,0,1,7,5ZM21,19H3a1,1,0,0,1,0-2H8.152l.246.292A2,2,0,0,0,9.925,18h4.149a2,2,0,0,0,1.528-.708L15.849,17H21a1,1,0,0,1,0,2Z"/></svg>

);
