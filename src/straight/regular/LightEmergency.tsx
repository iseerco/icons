import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LightEmergency = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,17v-8C21,4.037,16.963,0,12,0S3,4.037,3,9v8c-1.654,0-3,1.346-3,3v4h24v-4c0-1.654-1.346-3-3-3ZM5,9c0-3.859,3.141-7,7-7s7,3.141,7,7v8H5v-8Zm17,13H2v-2c0-.552.448-1,1-1h18c.552,0,1,.448,1,1v2ZM12,5v2c-1.103,0-2,.897-2,2h-2c0-2.206,1.794-4,4-4Z"/></svg>

);
