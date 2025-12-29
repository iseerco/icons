import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Subway = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,4a4,4,0,0,0-4-4H6A4,4,0,0,0,2,4V19H6.31L3.248,24H5.593l3.062-5H15.44L18.5,24h2.345l-3.062-5H22ZM6,2H18a2,2,0,0,1,2,2H4A2,2,0,0,1,6,2Zm7,9V6h7v5ZM4,11V6h7v5Zm0,6V13H6v1a1,1,0,0,0,2,0V13h8v1a1,1,0,0,0,2,0V13h2v4Z"/></svg>

);
