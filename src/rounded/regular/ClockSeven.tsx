import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClockSeven = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm-1.134,13.964l2-3.464c.087-.152,.134-.324,.134-.5V6c0-.552-.448-1-1-1s-1,.448-1,1v5.732l-1.866,3.232c-.276,.479-.112,1.09,.366,1.366,.157,.091,.33,.134,.499,.134,.346,0,.682-.179,.867-.5Z"/></svg>

);
