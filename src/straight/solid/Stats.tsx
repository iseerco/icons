import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Stats = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H3a3,3,0,0,1-3-3V0H2V21a1,1,0,0,0,1,1H24Z"/><rect x="14" y="11" width="2" height="9"/><rect x="6" y="11" width="2" height="9"/><rect x="18" y="6" width="2" height="14"/><rect x="10" y="6" width="2" height="14"/></svg>

);
