import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,6h-5A4.505,4.505,0,0,0,10,10.5V14H3V3.5a1.5,1.5,0,0,0-3,0v17a1.5,1.5,0,0,0,3,0V19H21v1.5a1.5,1.5,0,0,0,3,0v-10A4.505,4.505,0,0,0,19.5,6ZM21,14H13V10.5A1.5,1.5,0,0,1,14.5,9h5A1.5,1.5,0,0,1,21,10.5ZM6.5,14A2.5,2.5,0,1,1,9,11.5,2.5,2.5,0,0,1,6.5,14Z"/></svg>

);
