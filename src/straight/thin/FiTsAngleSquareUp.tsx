import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAngleSquareUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6.757,15.019l-.707-.707,4.86-4.86c.6-.6,1.578-.6,2.178,0l4.846,4.846-.707,.707-4.846-4.846c-.205-.203-.559-.203-.764,0l-4.86,4.86ZM24,2.5c0-1.379-1.121-2.5-2.5-2.5H2.5C1.121,0,0,1.121,0,2.5V24H24V2.5ZM1,2.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V23H1V2.5Z"/></svg>

);
