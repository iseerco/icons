import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrafficLightGo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,12c0,.551-.449,1-1,1s-1-.449-1-1,.449-1,1-1,1,.449,1,1Zm-1-8c-.551,0-1,.449-1,1s.449,1,1,1,1-.449,1-1-.449-1-1-1Zm8,1v14c0,2.757-2.243,5-5,5h-6c-2.757,0-5-2.243-5-5V5C4,2.243,6.243,0,9,0h6c2.757,0,5,2.243,5,5Zm-5,14c0-1.654-1.346-3-3-3s-3,1.346-3,3,1.346,3,3,3,3-1.346,3-3Zm0-7c0-1.654-1.346-3-3-3s-3,1.346-3,3,1.346,3,3,3,3-1.346,3-3Zm0-7c0-1.654-1.346-3-3-3s-3,1.346-3,3,1.346,3,3,3,3-1.346,3-3Z"/></svg>

);
