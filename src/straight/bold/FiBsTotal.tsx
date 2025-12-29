import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTotal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,24H2v-2.575l8.482-9.425L2,2.576V0h16.5c1.93,0,3.5,1.57,3.5,3.5v1.5h-3v-1.5c0-.276-.225-.5-.5-.5H6.418l8.1,9-8.1,9h12.082c.275,0,.5-.225.5-.5v-1.5h3v1.5c0,1.93-1.57,3.5-3.5,3.5Z"/>
</svg>

);
