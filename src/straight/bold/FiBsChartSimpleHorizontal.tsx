import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChartSimpleHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,6H0V0H16c1.1,0,2,.9,2,2v2c0,1.1-.9,2-2,2Zm6,3H0v6H22c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Zm-12,9H0v6H10c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Z"/></svg>

);
