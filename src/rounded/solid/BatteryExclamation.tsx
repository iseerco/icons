import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BatteryExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.5,18.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm-.5-4.5V5c0-.553-.447-1-1-1s-1,.447-1,1v9c0,.553.447,1,1,1s1-.447,1-1Zm-4,5V5c0-.553-.447-1-1-1h-2C2.243,4,0,6.243,0,9v6c0,2.757,2.243,5,5,5h2c.553,0,1-.447,1-1Zm16-10v6c0,.552-.448,1-1,1h-1.101c-.465,2.279-2.484,4-4.899,4h-2c-.553,0-1-.447-1-1V5c0-.553.447-1,1-1h2c2.414,0,4.434,1.721,4.899,4h1.101c.552,0,1,.448,1,1Z"/></svg>

);
