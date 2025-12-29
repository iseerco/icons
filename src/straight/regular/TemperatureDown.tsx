import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TemperatureDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,14.184V12H6v2.184a3,3,0,1,0,2,0ZM7,18a1,1,0,1,1,1-1A1,1,0,0,1,7,18ZM12,5A5,5,0,0,0,2,5v7.11a7,7,0,1,0,10,0ZM7,22a4.994,4.994,0,0,1-3.332-8.719l.332-.3V5a3,3,0,0,1,6,0v7.983l.332.3A4.994,4.994,0,0,1,7,22ZM15.707,6.707,14.293,8.121l3.293,3.293a2,2,0,0,0,2.828,0l3.293-3.293L22.293,6.707,20,9V0H18V9Z"/></svg>

);
