import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Table = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,2H3c-1.654,0-3,1.346-3,3v17h24V5c0-1.654-1.346-3-3-3Zm-8,6h9v5h-9v-5Zm-2,5H2v-5h9v5ZM3,4h18c.551,0,1,.449,1,1v1H2v-1c0-.551.449-1,1-1Zm-1,11h9v5H2v-5Zm11,5v-5h9v5h-9Z"/></svg>

);
