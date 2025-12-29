import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Ticket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,15V3a3,3,0,0,0-3-3H14V1a2,2,0,0,1-4,0V0H6A3,3,0,0,0,3,3V15H7v2H3v7h7V23a2,2,0,0,1,4,0v1h7V17H17V15Zm-7,2H10V15h4Z"/></svg>

);
