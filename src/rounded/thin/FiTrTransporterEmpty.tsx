import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrTransporterEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.5,24H4.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h15c.276,0,.5.224.5.5s-.224.5-.5.5Z"/></svg>

);
