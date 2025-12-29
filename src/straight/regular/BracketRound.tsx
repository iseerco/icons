import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BracketRound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.77,23.97c-.24-.18-5.77-4.56-5.77-11.97S13.54,.21,13.77,.03l1.23,1.58s-5,3.99-5,10.39,4.95,10.35,5,10.39l-1.23,1.58Z"/></svg>

);
