import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tram = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,2a2,2,0,0,1,4,0A2,2,0,0,1,13,2ZM10,5V9H9v7h6V9H12V3a2,2,0,1,0-2,2ZM21,9H17v7h7V12A3,3,0,0,0,21,9ZM0,24H24V18H0ZM7,9H3a3,3,0,0,0-3,3v4H7ZM6.046,3.452,0,4.615V6.692L6.8,5.374A3.953,3.953,0,0,1,6.046,3.452ZM18.855.989a3.694,3.694,0,0,1-.008,2.048l5.153-1V0Z"/></svg>

);
