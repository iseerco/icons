import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,14H24v8H22V19H2v3H0V2H2Zm3.5-2A2.5,2.5,0,1,0,3,9.5,2.5,2.5,0,0,0,5.5,12ZM21,6H12A3,3,0,0,0,9,9v3H24V9A3,3,0,0,0,21,6Z"/></svg>

);
