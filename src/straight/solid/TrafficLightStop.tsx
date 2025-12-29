import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrafficLightStop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,12c0,.551-.448,1-1,1s-1-.449-1-1,.448-1,1-1,1,.449,1,1Zm-1,6c-.552,0-1,.449-1,1s.448,1,1,1,1-.449,1-1-.448-1-1-1ZM20,3V24H4V3c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3Zm-5,16c0-1.654-1.346-3-3-3s-3,1.346-3,3,1.346,3,3,3,3-1.346,3-3Zm0-7c0-1.654-1.346-3-3-3s-3,1.346-3,3,1.346,3,3,3,3-1.346,3-3Zm0-7c0-1.654-1.346-3-3-3s-3,1.346-3,3,1.346,3,3,3,3-1.346,3-3Z"/></svg>

);
