import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Banner4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,6h-7v3H7v-3H0v.068l3.111,3.932-3.111,3.932v.068h4v5h16v-5h4v-.068l-3.111-3.932,3.111-3.932v-.068Zm-6,11H6v-6h12v6Z"/>
</svg>

);
