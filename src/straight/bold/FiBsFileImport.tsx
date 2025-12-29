import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileImport = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22,5.665v18.335H2v-6h3v3h14v-13h-5V3H5v8h-3V3c0-1.654,1.346-3,3-3h11.382l5.618,5.665Zm-13,13.335l3.707-3.793c.39-.391.39-1.024,0-1.414l-3.707-3.793v3H0v3h9v3Z"/></svg>

);
