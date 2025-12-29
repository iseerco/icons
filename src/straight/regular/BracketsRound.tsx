import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BracketsRound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7,22.39l-1.23,1.58c-.24-.18-5.77-4.56-5.77-11.97S5.54,.21,5.77,.03l1.23,1.58S2,5.6,2,12s4.95,10.35,5,10.39ZM18.23,.03l-1.23,1.58s5,3.99,5,10.39-4.95,10.35-5,10.39l1.23,1.58c.24-.18,5.77-4.56,5.77-11.97S18.46,.21,18.23,.03Z"/></svg>

);
