import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUserMusic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,20.5h0s0,.003,0,.004c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-1.209.859-2.218,2-2.45v-2.973l-4,.571v5.852h0c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-1.209.859-2.218,2-2.45v-3.836c0-1.236.923-2.3,2.146-2.475l5-.714c.716-.104,1.444.111,1.992.586.548.475.862,1.163.862,1.888v5.996ZM2,6C2,2.691,4.691,0,8,0s6,2.691,6,6-2.691,6-6,6-6-2.691-6-6Zm3,0c0,1.654,1.346,3,3,3s3-1.346,3-3-1.346-3-3-3-3,1.346-3,3ZM0,19v5h3v-5c0-1.103.897-2,2-2h6v-3h-6c-2.757,0-5,2.243-5,5Z"/>
</svg>

);
