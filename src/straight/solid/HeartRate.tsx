import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HeartRate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.494,23.525L11.937,7.442l-4.359,13.459-3.247-7.902H0v-2h5.67l1.685,4.098L12.063.558l4.511,15.917,1.688-5.475h5.738v2h-4.262l-3.244,10.525Z"/></svg>

);
