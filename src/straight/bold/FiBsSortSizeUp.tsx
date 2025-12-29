import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSortSizeUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,15h8v8h-8V15ZM14,1V11h10V1H14ZM4.74,.72L.45,4.93l2.1,2.14,2.45-2.4V24h3V4.71l2.4,2.4,2.12-2.12L8.27,.73c-.97-.97-2.56-.97-3.52-.01Z"/></svg>

);
