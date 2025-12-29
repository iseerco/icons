import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BurgerAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,16H1v-2H23v2Zm0,4v-2H1v2c0,2.21,1.79,4,4,4h14c2.21,0,4-1.79,4-4Zm0-8H1v-1C1,4.93,5.93,0,12,0s10.98,4.83,11,11v1Z"/></svg>

);
