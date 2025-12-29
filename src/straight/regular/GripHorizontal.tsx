import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GripHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6,10H0v-4c0-1.103.897-2,2-2h4v6Zm-4-2h2v-2h-2v2Zm13,2h-6v-6h6v6Zm-4-2h2v-2h-2v2Zm13,2h-6v-6h4c1.103,0,2,.897,2,2v4Zm-4-2h2v-2h-2v2Zm-14,12H2c-1.103,0-2-.897-2-2v-4h6v6Zm-4-4v2h2v-2h-2Zm13,4h-6v-6h6v6Zm-4-2h2v-2h-2v2Zm11,2h-4v-6h6v4c0,1.103-.897,2-2,2Zm-2-2h2v-2h-2v2Z"/></svg>

);
