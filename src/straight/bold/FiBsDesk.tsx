import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDesk = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M13.5,12v-2h5.5V2.5c0-1.378-1.121-2.5-2.5-2.5H7.5c-1.379,0-2.5,1.122-2.5,2.5v7.5h5.5v2H0v3H2v9h3V15H14v9h10V12H13.5ZM8,3h8V7H8V3Zm13,18h-4v-6h4v6Z"/>
</svg>

);
