import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquareDashed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2.5,0h4.5v1H2.5c-.827,0-1.5.673-1.5,1.5v4.5H0V2.5C0,1.121,1.122,0,2.5,0Zm-1.5,9H0v6h1v-6Zm0,8H0v7h7v-1H1v-6Zm22,6h-6v1h7v-7h-1v6Zm0-8h1v-6h-1v6Zm-1.5-15h-4.5v1h4.5c.827,0,1.5.673,1.5,1.5v4.5h1V2.5c0-1.379-1.122-2.5-2.5-2.5Zm-12.5,1h6V0h-6v1Zm0,23h6v-1h-6v1Z"/>
</svg>

);
