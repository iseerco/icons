import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBatteryExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,16.089h-1V4h1v12.089ZM0,20h7v-1H1V5h7v-1H0v16Zm22-12v-1.5c0-1.379-1.121-2.5-2.5-2.5h-6.5v1h6.5c.827,0,1.5.673,1.5,1.5v2.5h2v6h-2v2.5c0,.827-.673,1.5-1.5,1.5h-5.5v1h5.5c1.379,0,2.5-1.121,2.5-2.5v-1.5h2v-8h-2Zm-11.5,10c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Z"/></svg>

);
