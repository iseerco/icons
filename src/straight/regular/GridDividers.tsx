import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GridDividers = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,2H0V0H24V2Zm0,10H0v2H24v-2ZM6,4H0v6H6V4ZM2,6h2v2H2v-2Zm13-2h-6v6h6V4Zm-4,2h2v2h-2v-2Zm13-2h-6v6h6V4Zm-4,2h2v2h-2v-2ZM6,16H0v6H6v-6Zm-4,2h2v2H2v-2Zm13-2h-6v6h6v-6Zm-4,2h2v2h-2v-2Zm13-2h-6v6h6v-6Zm-4,2h2v2h-2v-2Z"/></svg>

);
