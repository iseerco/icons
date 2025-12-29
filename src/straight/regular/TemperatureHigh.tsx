import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TemperatureHigh = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,14.184V5H10v9.184a3,3,0,1,0,2,0ZM11,18a1,1,0,1,1,1-1A1,1,0,0,1,11,18ZM16,5A5,5,0,0,0,6,5v7.111a7,7,0,1,0,10,0ZM11,22a4.994,4.994,0,0,1-3.332-8.719l.332-.3V5a3,3,0,0,1,6,0v7.983l.332.3A4.994,4.994,0,0,1,11,22ZM21,0a3,3,0,1,0,3,3A3,3,0,0,0,21,0Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,21,4Z"/></svg>

);
