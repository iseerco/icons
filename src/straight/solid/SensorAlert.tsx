import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SensorAlert = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.028,5.964l7.972,13.995V3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3V24H5.722L16.028,5.964ZM8,3c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Zm-4,2c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm12.026,5l-8,14h15.974l-7.974-14Zm.974,12h-2v-2h2v2Zm-2-3v-4h2v4h-2Z"/></svg>

);
