import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlaneAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.812,24H8l3.038-9H6L4.915,16.653A2.993,2.993,0,0,1,2.412,18H.043l2.2-6L.027,6H2.4A2.991,2.991,0,0,1,4.9,7.343L6,9h5.041L8,0h2.812a3,3,0,0,1,2.634,1.563L17.588,9h3.305a3.084,3.084,0,0,1,3.067,2.5A3,3,0,0,1,21,15H17.588l-4.146,7.444A3,3,0,0,1,10.812,24Z"/></svg>

);
