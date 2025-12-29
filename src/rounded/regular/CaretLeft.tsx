import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaretLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.29,18.59,7.71,13a1,1,0,0,1,0-1.41L13.29,6A1,1,0,0,1,15,6.71V17.88A1,1,0,0,1,13.29,18.59Z"/></svg>

);
