import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ListMusic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,2H0V0h13v2Zm0,4H0v2h13v-2ZM24,0v2h-4.5c-.275,0-.5.224-.5.5v16c0,3.033-2.468,5.5-5.5,5.5s-5.5-2.467-5.5-5.5,2.468-5.5,5.5-5.5c1.328,0,2.548.474,3.5,1.261V2.5c0-1.378,1.121-2.5,2.5-2.5h4.5Zm-7,18.5c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5,1.57,3.5,3.5,3.5,3.5-1.57,3.5-3.5Zm-7.244-6.5H0v2h7.5c.608-.809,1.376-1.492,2.256-2Z"/>
</svg>

);
