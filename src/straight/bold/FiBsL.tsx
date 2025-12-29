import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsL = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,24H5.5c-1.93,0-3.5-1.57-3.5-3.5V0h3V20.5c0,.275,.224,.5,.5,.5H22v3Z"/></svg>

);
