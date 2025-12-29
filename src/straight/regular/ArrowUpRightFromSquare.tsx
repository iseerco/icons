import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowUpRightFromSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,2V10h-2V3.414l-12.793,12.793-1.414-1.414L20.586,2h-6.586V0h8c1.103,0,2,.897,2,2Zm-6,20H2V7c0-.551,.449-1,1-1H13.757l2-2H3c-1.654,0-3,1.346-3,3V24H20V8.243l-2,2v11.757Z"/></svg>

);
