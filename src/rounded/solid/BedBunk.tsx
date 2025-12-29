import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BedBunk = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8,15.5c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5ZM24,4.5v18.5c0,.552-.448,1-1,1s-1-.448-1-1v-2H2v2c0,.552-.448,1-1,1s-1-.448-1-1V1C0,.448.448,0,1,0s1,.448,1,1v6h7v-2.5c0-2.481,2.019-4.5,4.5-4.5h6c2.481,0,4.5,2.019,4.5,4.5ZM2,19h7v-2.5c0-2.481,2.019-4.5,4.5-4.5h8.5v-3H2v10Zm3.5-13c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Z"/>
</svg>

);
