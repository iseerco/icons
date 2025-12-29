import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Gopuram = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,0v8h-6v-2c0-1.105-.895-2-2-2s-2,.895-2,2v2h-6V0h2v2h2V0h2v2h4V0h2v2h2V0h2ZM2,10v6h8v-2c0-1.105.895-2,2-2s2,.895,2,2v2h8v-6H2ZM0,18v6h10v-2c0-1.105.895-2,2-2s2,.895,2,2v2h10v-6H0Z"/>
</svg>

);
