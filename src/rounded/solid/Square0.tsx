import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Square0 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,10v4c0,1.103-.897,2-2,2s-2-.897-2-2v-4c0-1.103,.897-2,2-2s2,.897,2,2Zm10-5v14c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-8,5c0-2.206-1.794-4-4-4s-4,1.794-4,4v4c0,2.206,1.794,4,4,4s4-1.794,4-4v-4Z"/></svg>

);
