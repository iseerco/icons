import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GripVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14,6V0h4c1.103,0,2,.897,2,2v4h-6Zm2-4v2h2v-2h-2Zm-2,13v-6h6v6h-6Zm2-4v2h2v-2h-2Zm-2,13v-6h6v4c0,1.103-.897,2-2,2h-4Zm2-4v2h2v-2h-2ZM4,6V2c0-1.103.897-2,2-2h4v6h-6Zm4-4h-2v2h2v-2Zm-4,13v-6h6v6h-6Zm2-4v2h2v-2h-2Zm-2,11v-4h6v6h-4c-1.103,0-2-.897-2-2Zm2-2v2h2v-2h-2Z"/></svg>

);
