import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const U = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24c-5.514,0-10-4.486-10-10V1c.006-1.308,1.995-1.307,2,0V14c.377,10.591,15.627,10.583,16,0V1c.006-1.308,1.995-1.307,2,0V14c0,5.514-4.486,10-10,10Z"/></svg>

);
