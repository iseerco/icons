import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrModeAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C7.589,0,4,3.589,4,8v8c0,4.411,3.589,8,8,8s8-3.589,8-8v-8C20,3.589,16.411,0,12,0Zm5,16c0,2.757-2.243,5-5,5s-5-2.243-5-5v-8c0-2.757,2.243-5,5-5s5,2.243,5,5v8Zm-2,0c0,1.654-1.346,3-3,3s-3-1.346-3-3,1.346-3,3-3,3,1.346,3,3Z"/>
</svg>

);
