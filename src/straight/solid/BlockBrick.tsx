import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BlockBrick = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,7H11v4H0V7ZM8,0V5h8V0H8Zm10,5h6V3c0-1.654-1.346-3-3-3h-3V5ZM6,17v-4H0v4H6Zm10-4H8v4h8v-4Zm-3,6v5h11v-5H13Zm-2,0H0v5H11v-5Zm13-6h-6v4h6v-4ZM6,5V0H3C1.346,0,0,1.346,0,3v2H6Zm7,2v4h11V7H13Z"/></svg>

);
