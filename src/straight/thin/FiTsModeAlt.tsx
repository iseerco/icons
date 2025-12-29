import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsModeAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C7.589,0,4,3.589,4,8v8c0,4.411,3.589,8,8,8s8-3.589,8-8v-8C20,3.589,16.411,0,12,0Zm7,16c0,3.859-3.141,7-7,7s-7-3.141-7-7v-8c0-3.859,3.141-7,7-7s7,3.141,7,7v8Zm-7-4c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,7c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Z"/>
</svg>

);
