import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowToTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6.265,3.015h3L5.194,7.083A1.5,1.5,0,0,0,7.315,9.205L10.5,6.02v16.5a1.5,1.5,0,0,0,3,0V6.02l3.185,3.185a1.5,1.5,0,1,0,2.121-2.122L14.738,3.015h3a1.5,1.5,0,0,0,0-3H6.265a1.5,1.5,0,0,0,0,3Z"/></svg>

);
