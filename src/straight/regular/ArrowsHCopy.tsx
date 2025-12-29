import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowsHCopy = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.586.586,7.343,3.829,8.757,5.243,11,3V21L8.757,18.758,7.343,20.172l3.243,3.242a2,2,0,0,0,2.828,0l3.243-3.242-1.414-1.414L13,21V3l2.243,2.243,1.414-1.414L13.414.586A2,2,0,0,0,10.586.586Z"/></svg>

);
