import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareTerminal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5.662,18.162l-1.414-1.414,4.756-4.756L4.248,7.252l1.414-1.414,4.756,4.756c.775,.775,.775,2.037,0,2.812l-4.756,4.756ZM24,3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3V24H24V3ZM2,3c0-.552,.448-1,1-1H21c.552,0,1,.448,1,1V22H2V3Zm18,13H12v2h8v-2Z"/></svg>

);
