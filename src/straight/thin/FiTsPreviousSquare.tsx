import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPreviousSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21.5,0H2.5C1.122,0,0,1.122,0,2.5V24H24V2.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V23ZM9,7h-3v10h3v-4.145l8,4.499V6.645l-8,4.5V7Zm7,1.355v7.291l-6.481-3.646,6.481-3.645Zm-8,7.645h-1V8h1v8Z"/>
</svg>

);
