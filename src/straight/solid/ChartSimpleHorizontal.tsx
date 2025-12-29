import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartSimpleHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,15H0v-6H22c1.1,0,2,.9,2,2v2c0,1.1-.9,2-2,2Zm-6-9H0V0H16c1.1,0,2,.9,2,2v2c0,1.1-.9,2-2,2Zm-6,18H0v-6H10c1.1,0,2,.9,2,2v2c0,1.1-.9,2-2,2Z"/></svg>

);
