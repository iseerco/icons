import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="24 10.5 13.5 10.5 13.5 0 10.5 0 10.5 10.5 0 10.5 0 13.5 10.5 13.5 10.5 24 13.5 24 13.5 13.5 24 13.5 24 10.5"/></svg>

);
