import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CreditCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,3H3A3,3,0,0,0,0,6V8H24V6A3,3,0,0,0,21,3Z"/><path d="M0,21H24V10H0Zm7-5.5A1.5,1.5,0,1,1,5.5,14,1.5,1.5,0,0,1,7,15.5"/></svg>

);
