import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RadioButton = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M5,11C2.243,11,0,8.757,0,6S2.243,1,5,1s5,2.243,5,5-2.243,5-5,5Zm0-8c-1.654,0-3,1.346-3,3s1.346,3,3,3,3-1.346,3-3-1.346-3-3-3Zm0,20c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm0-8c-1.654,0-3,1.346-3,3s1.346,3,3,3,3-1.346,3-3-1.346-3-3-3ZM24,5H13v2h11v-2Zm0,12H13v2h11v-2ZM5,7.5c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5-1.5,.672-1.5,1.5,.672,1.5,1.5,1.5Z"/>
</svg>

);
