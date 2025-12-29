import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FighterJet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,9,10,2h3V0H7V9H4L2.9,7.343C2.346,6.5,2,6,.987,6H0V18H.415a3,3,0,0,0,2.5-1.347L4,15H7v9h6V22H10l5-7c3.958-.294,9-.674,9-3S18.959,9.281,15,9Z"/></svg>

);
