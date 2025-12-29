import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowSquareUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,0H3.5A3.5,3.5,0,0,0,0,3.5V24H24V3.5A3.5,3.5,0,0,0,20.5,0ZM21,21H3V3.5A.5.5,0,0,1,3.5,3h17a.5.5,0,0,1,.5.5ZM8.111,13.1,5.99,10.974l4.242-4.243a2.5,2.5,0,0,1,3.536,0l4.242,4.243L15.889,13.1,13.5,10.706v7.328h-3V10.706Z"/></svg>

);
