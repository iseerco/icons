import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsR = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.009,24l-5.777-10.109c3.274-.584,5.768-3.452,5.768-6.891,0-3.859-3.141-7-7-7H4.5c-1.378,0-2.5,1.121-2.5,2.5V24h1V14H15c.047,0,.094,0,.141-.002l5.716,10.002h1.153ZM3,13V2.5c0-.827,.673-1.5,1.5-1.5H15c3.309,0,6,2.691,6,6s-2.691,6-6,6H3Z"/></svg>

);
