import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TransporterEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,24H5c-.552,0-1-.447-1-1s.448-1,1-1h14c.552,0,1,.447,1,1s-.448,1-1,1Z"/></svg>

);
