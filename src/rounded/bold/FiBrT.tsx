import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrT = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,0H3.5c-1.972,.034-1.971,2.966,0,3h7V22.5c.034,1.972,2.966,1.971,3,0V3h7c1.972-.034,1.971-2.966,0-3Z"/></svg>

);
