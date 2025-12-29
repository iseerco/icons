import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGridDividers = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,3H0V0H24V3Zm0,10H0v3H24v-3ZM6,5H0v6H6V5Zm9,0h-6v6h6V5Zm9,0h-6v6h6V5ZM6,18H0v6H6v-6Zm9,0h-6v6h6v-6Zm9,0h-6v6h6v-6Z"/></svg>

);
