import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const License = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.41,5h-4.41V.59l4.41,4.41Zm-3.41,11c0-2.21-1.79-4-4-4s-4,1.79-4,4c0,1.47,.81,2.75,2,3.44v4.56l2-2,2,2v-4.56c1.19-.69,2-1.97,2-3.44Zm-3-9V0H5c-1.66,0-3,1.34-3,3V24H10v-3.54c-1.22-1.1-2-2.69-2-4.46,0-3.31,2.69-6,6-6s6,2.69,6,6c0,1.77-.78,3.36-2,4.46v3.54h4V7h-7Z"/></svg>

);
