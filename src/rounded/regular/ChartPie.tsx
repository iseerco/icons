import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartPie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm9.573,9.12-8.908,1.732a4.941,4.941,0,0,1-.368-.679l-3.34-7.7A9.987,9.987,0,0,1,21.573,9.12ZM12,22A9.995,9.995,0,0,1,7.124,3.278l3.338,7.691a7.011,7.011,0,0,0,2.167,2.772l6.653,5.092A9.966,9.966,0,0,1,12,22Zm8.5-4.755-6.125-4.688,7.581-1.473c.027.3.046.607.046.916A9.925,9.925,0,0,1,20.5,17.245Z"/></svg>

);
