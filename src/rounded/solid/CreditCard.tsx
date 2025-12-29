import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CreditCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,3H5A5.006,5.006,0,0,0,0,8H24A5.006,5.006,0,0,0,19,3Z"/><path d="M0,16a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V10H0Zm7-.5A1.5,1.5,0,1,1,5.5,14,1.5,1.5,0,0,1,7,15.5"/></svg>

);
