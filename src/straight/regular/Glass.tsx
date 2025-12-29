import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Glass = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1.354,0,4.273,21.405A3.012,3.012,0,0,0,7.246,24h9.508a3.012,3.012,0,0,0,2.973-2.595L22.646,0ZM17.745,21.135a1,1,0,0,1-.991.865H7.246a1,1,0,0,1-.991-.865L4.6,9H16.689L17,7H4.327L3.646,2H20.354Z"/></svg>

);
