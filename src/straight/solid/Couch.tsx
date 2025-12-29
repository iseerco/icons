import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Couch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2,8v-2C2,3.239,4.239,1,7,1h10c2.761,0,5,2.239,5,5v2c-2.209,0-4,1.791-4,4v3H6v-3c0-2.209-1.791-4-4-4Zm22,2h-2c-1.105,0-2,.895-2,2v5H4v-5c0-1.105-.895-2-2-2H0v11h2v2h2v-2h16v2h2v-2h2v-11Z"/>
</svg>

);
