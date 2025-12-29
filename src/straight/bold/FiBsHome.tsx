import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHome = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.768,1.147a2.5,2.5,0,0,0-3.536,0L0,11.38V21a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.38ZM21,21H16V17.818A3.818,3.818,0,0,0,12.182,14h-.364A3.818,3.818,0,0,0,8,17.818V21H3V12.622l9-9,9,9Z"/></svg>

);
