import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartSimpleHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,9H0v6H22c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Zm0,4H2v-2H22v2ZM18,2c0-1.1-.9-2-2-2H0V6H16c1.1,0,2-.9,2-2V2Zm-2,2H2V2h14v2Zm-6,14H0v6H10c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Zm0,4H2v-2H10v2Z"/></svg>

);
