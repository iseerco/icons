import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDiceD4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.748,1.392a3.408,3.408,0,0,0-5.5,0L.021,15.218,12,24l12-8.78Zm5.16,13.1L13.5,19.183V4.919ZM10.5,4.923V19.179L4.109,14.5Z"/></svg>

);
