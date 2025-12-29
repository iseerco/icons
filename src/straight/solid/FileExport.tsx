import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileExport = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.41,5h-4.41V.59l4.41,4.41Zm4,9.59l-3.3-3.3-1.41,1.41,2.3,2.29H13v2h8l-2.29,2.29,1.41,1.41,3.3-3.3c.77-.77,.77-2.04,0-2.81Zm-12.42,4.41v-6h4.59l4.41-4.41v-1.59h-7V0H3C1.34,0,0,1.34,0,3V24H20v-.59l-4.41-4.41h-4.59Z"/></svg>

);
