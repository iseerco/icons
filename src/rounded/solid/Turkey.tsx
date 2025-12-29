import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Turkey = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.41,8.808c1.537-1.566,5.79-3.515,7.929-2.561l1.44-1.44a1.5,1.5,0,1,1,2.063-.649,1.5,1.5,0,1,1-.649,2.063L19.749,7.665c.981,2.39-1.1,6.474-2.555,7.927C12.6,19.949,6.055,13.4,10.41,8.808Zm8.2,8.2c-6.831,6.361-16.1-3.669-9.21-9.981A8.942,8.942,0,0,0,0,16v2.568C.168,23.879,5.723,23.808,9,24c9,.149,20.246-2.311,12.416-11.777A13.057,13.057,0,0,1,18.607,17.006ZM8,4A1,1,0,0,0,9,3V1A1,1,0,0,0,7,1V3A1,1,0,0,0,8,4Zm4,0a1,1,0,0,0,1-1V1a1,1,0,0,0-2,0V3A1,1,0,0,0,12,4ZM4,4A1,1,0,0,0,5,3V1A1,1,0,0,0,3,1V3A1,1,0,0,0,4,4Z"/></svg>

);
