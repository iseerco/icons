import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsF = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4.5,1H22V0H4.5c-1.378,0-2.5,1.122-2.5,2.5V24h1V13h15v-1H3V2.5c0-.827,.673-1.5,1.5-1.5Z"/></svg>

);
