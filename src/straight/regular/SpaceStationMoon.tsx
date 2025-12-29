import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SpaceStationMoon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,2C5.383,2,0,7.383,0,14v8h24v-8c0-6.617-5.383-12-12-12Zm0,2c2.791,0,5.318,1.15,7.134,3H4.866c1.816-1.85,4.343-3,7.134-3Zm5,10.5v5.5h-3v-4c0-1.105-.895-2-2-2s-2,.895-2,2v4h-3v-5.5c0-2.236.386-4.2,1.069-5.5h7.861c.683,1.3,1.069,3.264,1.069,5.5Zm-15-.5c0-1.82.489-3.528,1.343-5h2.538c-.574,1.495-.881,3.386-.881,5.5v5.5h-3v-6Zm20,6h-3v-5.5c0-2.114-.307-4.005-.881-5.5h2.538c.853,1.472,1.343,3.18,1.343,5v6Z"/></svg>

);
