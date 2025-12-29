import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrU = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24c-5.514,0-10-4.486-10-10V.5c-.01-.649,1.01-.649,1,0V14c.454,11.926,17.55,11.917,18,0V.5c-.01-.649,1.01-.649,1,0V14c0,5.514-4.486,10-10,10Z"/></svg>

);
