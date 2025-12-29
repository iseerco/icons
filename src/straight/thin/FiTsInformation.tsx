import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsInformation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,1c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm2,22V6.5c0-1.378-1.122-2.5-2.5-2.5h-3.5v1h3.5c.827,0,1.5.673,1.5,1.5v16.5h-5v1h11v-1h-5Z"/></svg>

);
