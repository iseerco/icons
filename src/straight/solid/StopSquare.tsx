import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StopSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M15,15h-6v-6h6v6ZM24,3V24H0V3C0,1.346,1.346,0,3,0H21c1.654,0,3,1.346,3,3Zm-7,4H7v10h10V7Z"/>
</svg>

);
