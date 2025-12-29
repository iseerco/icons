import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsVenus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,8a8,8,0,1,0-9.5,7.854V19H8v3h2.5v2h3V22H16V19H13.5V15.854A8.01,8.01,0,0,0,20,8ZM7,8a5,5,0,1,1,5,5A5.006,5.006,0,0,1,7,8Z"/></svg>

);
