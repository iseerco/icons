import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAngleDoubleRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.33,9.533,12.8.005,10.68,2.126l9.529,9.528a.49.49,0,0,1,0,.692L10.68,21.874,12.8,24l9.529-9.528A3.493,3.493,0,0,0,22.33,9.533Z"/><path d="M13.8,10.939,2.86.005.739,2.126,10.613,12,.739,21.874,2.86,24,13.8,13.061A1.5,1.5,0,0,0,13.8,10.939Z"/></svg>

);
