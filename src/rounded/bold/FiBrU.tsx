import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrU = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24c-5.514,0-10-4.486-10-10V1.5c.034-1.972,2.967-1.971,3,0V14c.296,9.253,13.708,9.247,14,0V1.5c.034-1.972,2.967-1.971,3,0V14c0,5.514-4.486,10-10,10Z"/></svg>

);
