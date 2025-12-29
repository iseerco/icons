import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSortAmountDownAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><rect x="10" y="1" width="14" height="3"/><rect x="10" y="7" width="10" height="3"/><rect x="10" y="13" width="6" height="3"/><path d="M7,0h-3V19H0l4.597,4.591c.544,.545,1.427,.545,1.972,0h0l4.594-4.592H7V0Z"/></svg>

);
