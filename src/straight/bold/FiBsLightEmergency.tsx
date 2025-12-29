import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLightEmergency = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,19.036v-10.036C21,4.037,16.963,0,12,0S3,4.037,3,9v10.036c-1.694.243-3,1.704-3,3.464v1.5h24v-1.5c0-1.76-1.306-3.221-3-3.464ZM6,9c0-3.309,2.691-6,6-6s6,2.691,6,6v10H6v-10Zm6-4v3c-.552,0-1,.448-1,1h-3c0-2.206,1.794-4,4-4Z"/></svg>

);
