import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBolt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.307,24H8.073L10.1,16H6.965A2.99,2.99,0,0,1,4.1,12.144L8.443,0h9.626L15.228,7h2.808A2.962,2.962,0,0,1,20.5,11.6ZM13.95,13l-1.259,4.979L18,9.943,10.772,10l2.842-7H10.557L6.951,13.083Z"/></svg>

);
