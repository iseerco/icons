import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BuildAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,6h-7c-1.105,0-2-.895-2-2v-2c0-1.105.895-2,2-2h5c2.209,0,4,1.791,4,4h0c0,1.105-.895,2-2,2Zm-15,2v-4c0-1.105-.895-2-2-2h-1C1.791,2,0,3.791,0,6v2h7Zm1,16h8v-6h-8v6Zm10-6v6h2c2.209,0,4-1.791,4-4v-2h-6Zm-12,0H0v2c0,2.209,1.791,4,4,4h2v-6Zm5-8H0v6h11v-6Zm2,0v6h11v-4c0-1.105-.895-2-2-2h-9Z"/>
</svg>

);
