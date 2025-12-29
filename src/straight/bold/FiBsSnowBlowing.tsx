import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSnowBlowing = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M.115,8.433,3.485,6.5.115,4.567l1.492-2.6L5,3.911V0H8V3.911l3.393-1.946,1.492,2.6L9.515,6.5l3.37,1.933-1.492,2.6L8,9.089V13H5V9.089L1.607,11.035ZM12.5,15H0v3H12.5a1.5,1.5,0,0,1,0,3A1.645,1.645,0,0,1,11,20L8,20c0,2.094,2.145,4,4.5,4a4.5,4.5,0,0,0,0-9Zm7-11C17.1,4,15,5.869,15,8h3a1.536,1.536,0,1,1,1.5,2H14.292l-1.72,3H19.5a4.5,4.5,0,0,0,0-9Z"/></svg>

);
