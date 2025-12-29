import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WaterLower = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,21.315l1.506,1.317A4.006,4.006,0,0,1,18,22.618a3.994,3.994,0,0,1-6,0,3.994,3.994,0,0,1-6,0,4.006,4.006,0,0,1-6.009.014L1.5,21.315A2.01,2.01,0,0,0,5,20H7a2,2,0,0,0,4,0h2a2,2,0,0,0,4,0h2A2.01,2.01,0,0,0,22.5,21.315ZM6,17.618a3.994,3.994,0,0,0,6,0,3.994,3.994,0,0,0,6,0,4.006,4.006,0,0,0,6.009.014L22.5,16.315A2.01,2.01,0,0,1,19,15H17a2,2,0,0,1-4,0H11a2,2,0,0,1-4,0H5a2.01,2.01,0,0,1-3.5,1.315L-.009,17.632A4.006,4.006,0,0,0,6,17.618ZM8.707,6.707,7.293,8.121l3.293,3.293a2,2,0,0,0,2.828,0l3.293-3.293L15.293,6.707,13,9V0H11V9Z"/></svg>

);
