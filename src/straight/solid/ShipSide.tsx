import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShipSide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.7,14l-3,2H0v8H14A10,10,0,0,0,24,14ZM3,21a1,1,0,1,1,1-1A1,1,0,0,1,3,21Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,7,21Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,11,21ZM10,11V9H0V6H11.78a5.033,5.033,0,0,1,3.18,1.139A15.383,15.383,0,0,1,18.806,12H14.092l-3,2H0V11ZM2.083,4,1.029,0H7L8.056,4Z"/></svg>

);
