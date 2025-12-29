import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUtensils = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,0h3V9.5A3.5,3.5,0,0,1,9.5,13H8V24H5V13H3.5A3.5,3.5,0,0,1,0,9.5V0H3V9.5a.5.5,0,0,0,.5.5H5V0H8V10H9.5a.5.5,0,0,0,.5-.5ZM24,9.767c0,4.861-3.672,9.2-5,10.612V24H16V2.5a2.5,2.5,0,0,1,4.511-1.486C22.1,3.149,24,6.4,24,9.767Zm-5,5.754A9.365,9.365,0,0,0,19,4.1Z"/></svg>

);
