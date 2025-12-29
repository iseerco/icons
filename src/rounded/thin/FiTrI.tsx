import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrI = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,23h-6V1h6c.649,.01,.649-1.01,0-1H5.5c-.649-.01-.649,1.01,0,1h6V23H5.5c-.649-.01-.649,1.01,0,1h13c.649,.01,.649-1.01,0-1Z"/></svg>

);
