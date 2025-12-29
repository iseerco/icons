import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,16v-8C20,3.589,16.411,0,12,0S4,3.589,4,8v8c0,4.411,3.589,8,8,8s8-3.589,8-8ZM7,8c0-2.757,2.243-5,5-5s5,2.243,5,5-2.243,5-5,5-5-2.243-5-5Zm5,3c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Z"/>
</svg>

);
