import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mountains = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,8a4,4,0,0,1,0-8A4,4,0,0,1,20,8Zm1.452,16H12.589a2.548,2.548,0,0,1-2.221-1.26,2.463,2.463,0,0,1-.029-2.471l4.436-7.959a2.6,2.6,0,0,1,4.5,0L23.7,20.263a2.468,2.468,0,0,1-.028,2.475A2.551,2.551,0,0,1,21.452,24ZM8.644,23.754A4.45,4.45,0,0,1,8.591,19.3l4.437-7.96a4.519,4.519,0,0,1,1.507-1.605L12.944,6.755a3.344,3.344,0,0,0-5.885,0L.406,19.055A3.351,3.351,0,0,0,3.35,24H8.8C8.745,23.92,8.693,23.838,8.644,23.754Z"/></svg>

);
