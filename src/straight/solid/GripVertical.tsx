import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GripVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,24h-4v-6h6v4c0,1.105-.895,2-2,2Zm-8,0h-4c-1.105,0-2-.895-2-2v-4h6v6Zm10-9h-6v-6h6v6Zm-10,0h-6v-6h6v6Zm10-9h-6V0h4c1.105,0,2,.895,2,2v4Zm-10,0h-6V2c0-1.105.895-2,2-2h4v6Z"/></svg>

);
