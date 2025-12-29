import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsClip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.145,24A8.994,8.994,0,0,1,2.782,8.647L9.526,1.9a6.5,6.5,0,0,1,9.189,9.19l-6.742,6.743a4,4,0,0,1-5.656-5.656l6.39-6.389,2.12,2.121L8.438,14.3a1,1,0,1,0,1.414,1.414L16.6,8.973a3.5,3.5,0,1,0-4.949-4.949L4.9,10.767a6,6,0,0,0,8.484,8.484l6.389-6.39L21.9,14.982l-6.39,6.39A8.973,8.973,0,0,1,9.145,24Z"/></svg>

);
