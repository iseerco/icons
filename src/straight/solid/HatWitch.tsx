import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HatWitch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14,20h-4v-2h4v2Zm10,2v2H0v-2h1.677L8.034,3.384c.691-2.024,2.592-3.384,4.731-3.384h6.128l4.875,4.546-1.355,1.453h0s-.009.01-.009.01l-.01-.009h-4.373l-.803,1.155,5.103,14.845h1.677Zm-8-6h-8v6h8v-6Z"/></svg>

);
