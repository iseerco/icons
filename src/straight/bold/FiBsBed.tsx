import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,5h-7A3.5,3.5,0,0,0,10,8.5V13H3V2H0V22H3V19H21v3h3V8.5A3.5,3.5,0,0,0,20.5,5ZM13,13V8.5a.5.5,0,0,1,.5-.5h7a.5.5,0,0,1,.5.5V13ZM6.5,12A2.5,2.5,0,1,1,9,9.5,2.5,2.5,0,0,1,6.5,12Z"/></svg>

);
