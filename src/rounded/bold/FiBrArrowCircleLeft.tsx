import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowCircleLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g><path d="M24,12A12,12,0,1,0,12,24,12.013,12.013,0,0,0,24,12ZM3,12a9,9,0,1,1,9,9A9.011,9.011,0,0,1,3,12Z"/><path d="M11.185,15.449,9.269,13.5H17.5a1.5,1.5,0,0,0,0-3H9.269l1.916-1.949a1.5,1.5,0,1,0-2.14-2.1L6,9.55a3.524,3.524,0,0,0,0,4.9l3.048,3.1a1.5,1.5,0,1,0,2.14-2.1Z"/></g></svg>

);
