import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsScreen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,19V4.5c0-1.379-1.122-2.5-2.5-2.5H2.5C1.122,2,0,3.121,0,4.5v14.5H11.5v2H7v1h10v-1h-4.5v-2h11.5ZM1,4.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5v13.5H1V4.5Z"/>
</svg>

);
