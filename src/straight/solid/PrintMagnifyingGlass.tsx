import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PrintMagnifyingGlass = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0V5H5V0h14Zm5,22.59l-2.66-2.66c.44-.69,.7-1.51,.7-2.39,0-2.48-2.02-4.5-4.5-4.5s-4.5,2.02-4.5,4.5,2.02,4.5,4.5,4.5c.88,0,1.69-.26,2.39-.7l2.66,2.66,1.41-1.41Zm-3-15.59H3c-1.66,0-3,1.34-3,3v10H4v-7H12.82c1.18-1.23,2.84-2,4.68-2,3.59,0,6.5,2.91,6.5,6.5v-7.5c0-1.66-1.34-3-3-3Zm-10,10.5c0-.89,.18-1.73,.5-2.5H6v9h11.5c-3.59,0-6.5-2.91-6.5-6.5Z"/></svg>

);
