import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleZ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-2.979,15.787c.048.142.141.213.277.213h6.702c.553,0,1,.447,1,1s-.447,1-1,1h-6.702c-1,0-1.854-.62-2.174-1.58-.326-.976-.009-2.002.807-2.615l6.938-5.209c.166-.124.141-.293.111-.383-.048-.142-.141-.213-.277-.213h-6.702c-.553,0-1-.447-1-1s.447-1,1-1h6.702c1,0,1.854.62,2.174,1.58.326.976.009,2.002-.807,2.615l-6.938,5.209c-.166.124-.141.293-.111.383Z"/></svg>

);
