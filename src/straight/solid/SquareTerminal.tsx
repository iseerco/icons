import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareTerminal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3ZM10.418,13.406l-4.756,4.756-1.414-1.414,4.756-4.756L4.248,7.252l1.414-1.414,4.756,4.756c.775,.775,.775,2.037,0,2.812Zm9.582,4.594H12v-2h8v2Z"/></svg>

);
