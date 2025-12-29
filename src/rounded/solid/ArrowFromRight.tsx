import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowFromRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,5a1,1,0,0,0-1,1v5H2.579L6.872,6.707A1,1,0,0,0,5.458,5.293L.879,9.872a3,3,0,0,0,0,4.242l4.579,4.578a1,1,0,1,0,1.414-1.414L2.593,13H22v5a1,1,0,0,0,2,0V6A1,1,0,0,0,23,5Z"/></svg>

);
