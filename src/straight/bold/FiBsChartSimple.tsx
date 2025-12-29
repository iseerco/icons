import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChartSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,8V24h-6V8c0-1.1,.9-2,2-2h2c1.1,0,2,.9,2,2ZM13,0h-2c-1.1,0-2,.9-2,2V24h6V2c0-1.1-.9-2-2-2ZM4,12H2c-1.1,0-2,.9-2,2v10H6V14c0-1.1-.9-2-2-2Z"/></svg>

);
