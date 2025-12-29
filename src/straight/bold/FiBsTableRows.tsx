import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTableRows = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,2H3.5C1.57,2,0,3.57,0,5.5V22H24V5.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,3.5v4.5H9V5h11.5c.275,0,.5,.225,.5,.5ZM3,5.5c0-.275,.225-.5,.5-.5h2.5v14H3V5.5Zm6,13.5v-6h12v6H9Z"/></svg>

);
