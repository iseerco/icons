import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,1H3C1.343,1,0,2.343,0,4v14h15V4c0-1.657-1.343-3-3-3Zm0,10h-3.5v3.5h-2v-3.5h-3.5v-2h3.5v-3.5h2v3.5h3.5v2Zm9.942,9c.034.162.058.328.058.5,0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-.172.024-.338.058-.5h4.885Zm-4.942-7h7v5h-7v-5Zm7-3v1h-7v-6h2c2.757,0,5,2.243,5,5ZM7.942,20c.034.162.058.328.058.5,0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-.172.024-.338.058-.5h4.885Z"/>
</svg>

);
