import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrafficLightGo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,9c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Zm0-4c-.551,0-1,.449-1,1s.449,1,1,1,1-.449,1-1-.449-1-1-1Zm0,10c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Zm0-4c-.551,0-1,.449-1,1s.449,1,1,1,1-.449,1-1-.449-1-1-1Zm0,10c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Zm3,3h-6c-2.757,0-5-2.243-5-5V5C4,2.243,6.243,0,9,0h6c2.757,0,5,2.243,5,5v14c0,2.757-2.243,5-5,5ZM9,2c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h6c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3h-6Z"/></svg>

);
