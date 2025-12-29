import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTransporterEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20,22.5c0,.828-.671,1.5-1.5,1.5H5.5c-.829,0-1.5-.672-1.5-1.5s.671-1.5,1.5-1.5h13c.829,0,1.5.672,1.5,1.5Z"/></svg>

);
