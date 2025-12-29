import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StopSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M15,9v6h-6v-6s6,0,6,0Zm9-4v14c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-7,4c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v6c0,1.103,.897,2,2,2h6c1.103,0,2-.897,2-2v-6Z"/>
</svg>

);
