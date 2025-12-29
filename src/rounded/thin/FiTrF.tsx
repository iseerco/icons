import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrF = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,0H6.5C4.019,0,2,2.019,2,4.5V23.5c-.01,.649,1.01,.649,1,0V13h14.5c.649,.01,.649-1.01,0-1H3V4.5c0-1.93,1.57-3.5,3.5-3.5h15c.649,.01,.649-1.01,0-1Z"/></svg>

);
