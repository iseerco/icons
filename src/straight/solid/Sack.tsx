import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sack = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.088,5.084c1.065-.696,2.912-2.201,2.912-4.284V0H8V.8c0,2.083,1.847,3.588,2.912,4.284C5.548,5.908,1,12.63,1,18c0,3.309,2.691,6,6,6h10c3.309,0,6-2.691,6-6,0-5.37-4.548-12.092-9.912-12.916Z"/></svg>

);
