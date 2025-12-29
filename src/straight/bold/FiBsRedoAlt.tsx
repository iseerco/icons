import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRedoAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.167,15.356l4.95-4.949a3,3,0,0,0,0-4.243l-4.95-4.949L16.046,3.336,19.71,7H3.5A3.5,3.5,0,0,0,0,10.5v10A3.5,3.5,0,0,0,3.5,24H22V21H3.5a.5.5,0,0,1-.5-.5v-10a.5.5,0,0,1,.5-.5H19.282l-3.236,3.235Z"/></svg>

);
