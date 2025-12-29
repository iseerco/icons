import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CandyAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.715.036C7.968-.714,3.049,8.681,7.975,14.611L.293,22.293a1,1,0,0,0,1.414,1.414l7.682-7.682C15.068,20.742,24.107,16.446,24,9A9.006,9.006,0,0,0,15.715.036ZM15,16A7.009,7.009,0,0,1,8,9C7.786,1.742,19.233-1.307,20,7a5.006,5.006,0,0,1-5,5,3,3,0,0,1,0-6,1.069,1.069,0,0,1,1,1,1,1,0,0,1-1,1,1,1,0,0,0,0,2,3,3,0,0,0,0-6,5.006,5.006,0,0,0-5,5c.606,7.788,11.2,5.628,11.92-1A7.009,7.009,0,0,1,15,16Z"/></svg>

);
