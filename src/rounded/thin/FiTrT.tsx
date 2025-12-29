import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrT = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,0H2.5c-.649-.01-.649,1.01,0,1H11.5V23.5c-.01,.649,1.01,.649,1,0V1h9c.649,.01,.649-1.01,0-1Z"/></svg>

);
