import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsYogaMoon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21.5,9c-1.378,0-2.5,1.122-2.5,2.5s1.122,2.5,2.5,2.5,2.5-1.121,2.5-2.5-1.122-2.5-2.5-2.5Zm0,4c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5,.673,1.5,1.5-.673,1.5-1.5,1.5Zm-4.47-4H8.5s0,0,0,0c-1.295,0-2.479,.71-3.089,1.853L.445,22H1.65l3.478-8h4.065l3.091,8h1.216l-3.201-8h6.731v8h1V1h-1V9Zm-11.467,4l.69-1.586c.471-.895,1.306-1.414,2.248-1.414h0s8.53,0,8.53,0v3H5.563Z"/>
</svg>

);
