import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleThreeQuarters = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.38,24,0,18.62,0,12S5.38,0,12,0h1V11h11v1c0,6.62-5.38,12-12,12ZM11,2.05C5.95,2.55,2,6.82,2,12c0,5.51,4.49,10,10,10,5.18,0,9.45-3.95,9.95-9H11V2.05Z"/></svg>

);
