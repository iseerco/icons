import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BuildAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,6h-11V0h9c1.105,0,2,.895,2,2v4Zm-17,2V2H2c-1.105,0-2,.895-2,2v4h7Zm1,16h8v-6h-8v6Zm10-6v6h6v-6h-6Zm-12,0H0v6h6v-6Zm5-8H0v6h11v-6Zm2,0v6h11v-6h-11Z"/>
</svg>

);
