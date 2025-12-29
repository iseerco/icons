import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Escalator = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm18,2.5v8h-3.634l-11.603,9.817c-.9.763-2.048,1.183-3.229,1.183H0v-8h3.634l1.366-1.156v-5.844c0-1.654,1.346-3,3-3h1c1.628,0,2.957,1.304,2.998,2.923l3.238-2.74c.9-.763,2.048-1.183,3.229-1.183h5.535ZM7,13.152l3-2.538v-1.614c0-.551-.448-1-1-1h-1c-.552,0-1,.449-1,1v4.152Zm15-6.152h-3.535c-.708,0-1.396.252-1.937.709l-12.162,10.291h-2.366v4h3.535c.708,0,1.396-.252,1.937-.709l12.162-10.291h2.366v-4Z"/></svg>

);
