import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHose = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,21h24v3H0v-3Zm0-2h24v-3H0v3ZM16.135,6.461l7.865-1.461v-3l-7.865-1.461c-.594-.099-1.135.359-1.135.961v.5H6C2.691,2,0,4.691,0,8s2.691,6,6,6h18v-3H6c-1.654,0-3-1.346-3-3s1.346-3,3-3h9v.5c0,.602.541,1.06,1.135.961Z"/>
</svg>

);
