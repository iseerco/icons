import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Banner4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m6,10h12v8H6v-8Zm-2-2h3v-2H0v.068l3.111,3.932-3.111,3.932v.068h4v-6Zm16,6h4v-.068s-3.111-3.932-3.111-3.932l3.111-3.932v-.068h-7v2h3s0,6,0,6Z"/>
</svg>

);
