import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrMoon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,24A12,12,0,1,1,19.058.71a2.93,2.93,0,0,1,.814,5.067c-5.1,3.92-5.088,8.539,0,12.446a2.93,2.93,0,0,1-.816,5.067A12.2,12.2,0,0,1,15,24ZM15,3a9,9,0,1,0,2.925,17.508c-6.511-5.065-6.489-11.969,0-17.016A9.322,9.322,0,0,0,15,3Z"/></svg>

);
