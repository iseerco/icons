import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrMode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12.058.02C7.646.02,4.058,3.608,4.058,8.02v8c0,4.411,3.589,8,8,8s8-3.589,8-8v-8C20.058,3.608,16.469.02,12.058.02Zm7,16c0,3.859-3.141,7-7,7s-7-3.141-7-7v-8c0-3.859,3.14-7,7-7s7,3.141,7,7v8Zm-7-12c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,7c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Z"/>
</svg>

);
