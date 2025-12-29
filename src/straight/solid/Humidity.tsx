import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Humidity = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.063,6.921,12,.013,4.929,6.929a10,10,0,1,0,14.134-.008ZM8,11a1,1,0,0,1,2,0A1,1,0,0,1,8,11Zm2.766,7H8.434l4.8-8h2.332ZM15,18a1,1,0,0,1,0-2A1,1,0,0,1,15,18Z"/></svg>

);
