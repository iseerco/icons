import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsComputer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,19V3.5c0-1.378-1.121-2.5-2.5-2.5H2.5C1.121,1,0,2.122,0,3.5v15.5H11.5v3H6v1h12v-1h-5.5v-3h11.5ZM2.5,2H21.5c.827,0,1.5,.673,1.5,1.5V14H1V3.5c0-.827,.673-1.5,1.5-1.5ZM1,15H23v3H1v-3Z"/>
</svg>

);
