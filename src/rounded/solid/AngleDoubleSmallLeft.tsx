import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AngleDoubleSmallLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.482,19.5a1.5,1.5,0,0,1-1.06-.439L4.836,14.475a3.505,3.505,0,0,1,0-4.95L9.422,4.939a1.5,1.5,0,0,1,2.121,2.122L6.957,11.646a.5.5,0,0,0,0,.708l4.586,4.585A1.5,1.5,0,0,1,10.482,19.5Z"/><path d="M17.482,19.5a1.5,1.5,0,0,1-1.06-.439l-6-6a1.5,1.5,0,0,1,0-2.122l6-6a1.5,1.5,0,1,1,2.121,2.122L13.6,12l4.939,4.939A1.5,1.5,0,0,1,17.482,19.5Z"/></svg>

);
