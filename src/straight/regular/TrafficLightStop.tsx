import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrafficLightStop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,0H7c-1.654,0-3,1.346-3,3V24H20V3c0-1.654-1.346-3-3-3Zm1,22H6V3c0-.551,.448-1,1-1h10c.552,0,1,.449,1,1V22Zm-6-13c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Zm-3,3c0,1.654,1.346,3,3,3s3-1.346,3-3-1.346-3-3-3-3,1.346-3,3Zm3-1c.552,0,1,.449,1,1s-.448,1-1,1-1-.449-1-1,.448-1,1-1Zm-3,7c0,1.654,1.346,3,3,3s3-1.346,3-3-1.346-3-3-3-3,1.346-3,3Zm3-1c.552,0,1,.449,1,1s-.448,1-1,1-1-.449-1-1,.448-1,1-1Z"/></svg>

);
