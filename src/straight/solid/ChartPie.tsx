import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartPie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><title>07-Chart</title><path d="M14.414,13l6.745,6.745A11.945,11.945,0,0,0,23.95,13Z"/><path d="M11.293,12.707h0L11,12.414V.05a12,12,0,1,0,8.745,21.109Z"/><path d="M13,11H23.95A11.99,11.99,0,0,0,13,.05Z"/></svg>

);
