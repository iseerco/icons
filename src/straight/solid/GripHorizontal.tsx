import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GripHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6,10H0v-4c0-1.105.895-2,2-2h4v6Zm9,0h-6v-6h6v6Zm9,0h-6v-6h4c1.105,0,2,.895,2,2v4ZM6,20H2c-1.105,0-2-.895-2-2v-4h6v6Zm9,0h-6v-6h6v6Zm7,0h-4v-6h6v4c0,1.105-.895,2-2,2Z"/></svg>

);
