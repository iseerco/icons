import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrHeading = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,22.5c0,.828-.672,1.5-1.5,1.5h-4c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5h.5v-8H5v8h.5c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5H1.5c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5h.5V3h-.5c-.828,0-1.5-.672-1.5-1.5S.672,0,1.5,0h4c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5h-.5v7h14V3h-.5c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5h4c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5h-.5v18h.5c.828,0,1.5.672,1.5,1.5Z"/></svg>

);
