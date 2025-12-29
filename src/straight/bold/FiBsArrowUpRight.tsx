import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowUpRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,0H9V3h9.879L.026,21.853l2.121,2.121L21,5.121V15h3V2.5c0-1.378-1.121-2.5-2.5-2.5Z"/></svg>

);
