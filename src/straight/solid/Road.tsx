import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Road = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.276,2.48A3,3,0,0,0,17.321,0H6.681A2.994,2.994,0,0,0,3.726,2.483L-.039,24h24.1ZM13,21H11V17h2Zm0-7H11V10h2Zm0-7H11V3h2Z"/></svg>

);
