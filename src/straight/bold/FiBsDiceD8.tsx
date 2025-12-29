import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDiceD8 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.4.987a3.489,3.489,0,0,0-4.8,0L.012,12,9.6,23.013a3.407,3.407,0,0,0,4.8,0L23.988,12Zm4.875,10.164L13.5,12.856V4.518ZM10.5,4.518v8.338l-5.773-1.7ZM6.4,14.774l4.1,1.211v3.5Zm7.1,4.708v-3.5l4.1-1.211Z"/></svg>

);
