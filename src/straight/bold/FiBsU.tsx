import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsU = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24c-5.514,0-10-4.486-10-10V0h3V14c0,3.859,3.14,7,7,7s7-3.141,7-7V0h3V14c0,5.514-4.486,10-10,10Z"/></svg>

);
