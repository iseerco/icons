import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrSquareSmall = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,19h-6c-2.21,0-4-1.79-4-4v-6c0-2.21,1.79-4,4-4h6c2.21,0,4,1.79,4,4v6c0,2.21-1.79,4-4,4ZM9,6c-1.65,0-3,1.35-3,3v6c0,1.65,1.35,3,3,3h6c1.65,0,3-1.35,3-3v-6c0-1.65-1.35-3-3-3h-6Z"/></svg>

);
