import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsScreenPlay = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21.5,0H2.5C1.122,0,0,1.122,0,2.5v15.5H24V2.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,17H1V2.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5v14.5Zm-15-3.065l8.633-4.935L8,4.066V13.935Zm1-8.145l5.618,3.21-5.618,3.211V5.79Zm-1,14.21c-.929,0-1.705,.64-1.929,1.5H0v1H6.071c.224,.86,1,1.5,1.929,1.5s1.705-.64,1.929-1.5h14.071v-1H9.929c-.224-.86-1-1.5-1.929-1.5Zm0,3c-.551,0-1-.448-1-1s.449-1,1-1,1,.448,1,1-.449,1-1,1Z"/>
</svg>

);
