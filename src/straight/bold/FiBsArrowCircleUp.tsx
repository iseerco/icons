import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowCircleUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24A12,12,0,1,0,0,12,12.013,12.013,0,0,0,12,24ZM12,3a9,9,0,1,1-9,9A9.011,9.011,0,0,1,12,3ZM8.111,13.061,5.99,10.939,10.232,6.7a2.5,2.5,0,0,1,3.536,0l4.242,4.242-2.121,2.122L13.5,10.671V18h-3V10.671Z"/></svg>

);
