import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Road = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.321,0H6.681A2.994,2.994,0,0,0,3.726,2.483L-.039,24h24.1L20.276,2.48A3,3,0,0,0,17.321,0ZM2.341,22,5.7,2.828A1,1,0,0,1,6.681,2h10.64a1,1,0,0,1,.985.827L21.679,22ZM11,4h2V8H11Zm0,6h2v4H11Zm0,6h2v4H11Z"/></svg>

);
