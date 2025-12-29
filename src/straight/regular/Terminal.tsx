import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Terminal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.11,12L1.4,21.71-.01,20.29,8.28,12-.01,3.71l1.41-1.41L11.11,12Zm-.11,8v2h13v-2H11Z"/></svg>

);
