import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrafficLightSlow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,6c0-1.654-1.346-3-3-3s-3,1.346-3,3,1.346,3,3,3,3-1.346,3-3Zm-3,1c-.551,0-1-.449-1-1s.449-1,1-1,1,.449,1,1-.449,1-1,1Zm0,2c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Zm-3,9c0,1.654,1.346,3,3,3s3-1.346,3-3-1.346-3-3-3-3,1.346-3,3Zm3-1c.551,0,1,.449,1,1s-.449,1-1,1-1-.449-1-1,.449-1,1-1ZM17,0H7c-1.654,0-3,1.346-3,3V24H20V3c0-1.654-1.346-3-3-3Zm1,22H6V3c0-.551,.449-1,1-1h10c.551,0,1,.449,1,1V22Z"/></svg>

);
