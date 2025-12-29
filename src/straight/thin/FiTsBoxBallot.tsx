import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBoxBallot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,8h-2.5V2.5c0-1.378-1.121-2.5-2.5-2.5H7.5c-1.378,0-2.5,1.122-2.5,2.5v5.5H2.5c-1.378,0-2.5,1.122-2.5,2.5v13.5H24V10.5c0-1.378-1.121-2.5-2.5-2.5ZM6,2.5c0-.827,.673-1.5,1.5-1.5h9c.827,0,1.5,.673,1.5,1.5V13H6V2.5Zm-3.5,6.5h2.5v5h14v-5h2.5c.827,0,1.5,.673,1.5,1.5v7.5H1v-7.5c0-.827,.673-1.5,1.5-1.5Zm-1.5,14v-4H23v4H1Z"/></svg>

);
