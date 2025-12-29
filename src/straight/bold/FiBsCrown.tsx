import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCrown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,22.2H3a3,3,0,0,1-3-3V1.8L6.272,8.076,12,2.348l5.728,5.728L24,1.8V19.2A3,3,0,0,1,21,22.2ZM3,9.045V19.2l18,0V9.045l-3.272,3.273L12,6.59,6.272,12.318Z"/></svg>

);
