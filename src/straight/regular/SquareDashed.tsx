import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareDashed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,0h4v2H3c-.551,0-1,.448-1,1v4H0V3C0,1.346,1.346,0,3,0Zm-1,9H0v6h2v-6Zm0,8H0v7h7v-2H2v-5Zm20,5h-5v2h7v-7h-2v5Zm0-7h2v-6h-2v6Zm-1-15h-4v2h4c.551,0,1,.448,1,1v4h2V3c0-1.654-1.346-3-3-3Zm-12,2h6V0h-6v2Zm0,22h6v-2h-6v2Z"/>
</svg>

);
