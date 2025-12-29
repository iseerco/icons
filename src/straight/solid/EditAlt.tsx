import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EditAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="19 23.414 23.414 19 19 19 19 23.414"/><path d="M23.419,1.568a1.944,1.944,0,0,0-2.824.078l-8.76,9.7a5.031,5.031,0,0,1,2.46,2.093l9.124-9.124A1.943,1.943,0,0,0,23.419,1.568Z"/><path d="M14.982,15.583Q15,15.79,15,16a5.006,5.006,0,0,1-5,5H5a2,2,0,0,1-1.973-2.329c.454-2.726,2.308-7.257,6.4-7.644L19.105.313A4.019,4.019,0,0,1,19.418,0H3A3,3,0,0,0,0,3V24H17V17h7V6.565Z"/><path d="M5,19s1-6,5-6h0a3,3,0,0,1,3,3h0a3,3,0,0,1-3,3Z"/></svg>

);
