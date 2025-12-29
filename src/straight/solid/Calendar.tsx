import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Calendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,10V24H0V10Zm0-2V5a3,3,0,0,0-3-3H18V0H16V2H8V0H6V2H3A3,3,0,0,0,0,5V8Zm-6,6H16v2h2Zm-5,0H11v2h2ZM8,14H6v2H8Zm10,4H16v2h2Zm-5,0H11v2h2ZM8,18H6v2H8Z"/></svg>

);
