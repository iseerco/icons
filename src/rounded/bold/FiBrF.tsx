import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrF = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,0H7.5C4.467,0,2,2.467,2,5.5V22.5c.033,1.972,2.967,1.971,3,0V14h11.5c1.972-.033,1.971-2.967,0-3H5V5.5c0-1.378,1.122-2.5,2.5-2.5h13c1.972-.033,1.971-2.967,0-3Z"/></svg>

);
