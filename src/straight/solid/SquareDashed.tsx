import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareDashed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2,7H0V3C0,1.346,1.346,0,3,0h4v2H3c-.551,0-1,.448-1,1v4Zm0,2H0v6h2v-6Zm5,13H2v-5H0v7h7v-2Zm17-5h-2v5h-5v2h7v-7Zm0-8h-2v6h2v-6Zm0-6c0-1.654-1.346-3-3-3h-4v2h4c.551,0,1,.448,1,1v4h2V3ZM15,0h-6v2h6V0Zm0,22h-6v2h6v-2Z"/>
</svg>

);
