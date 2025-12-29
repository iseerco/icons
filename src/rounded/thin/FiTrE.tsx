import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrE = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,23H6.5c-1.93,0-3.5-1.57-3.5-3.5v-7.5h14.5c.649,.01,.649-1.01,0-1H3V4.5c0-1.93,1.57-3.5,3.5-3.5h15c.649,.01,.649-1.01,0-1H6.5C4.019,0,2,2.019,2,4.5v15c0,2.481,2.019,4.5,4.5,4.5h15c.649,.01,.649-1.01,0-1Z"/></svg>

);
