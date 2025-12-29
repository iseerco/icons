import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBedAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,2H3.5C1.57,2,0,3.57,0,5.5V22H3v-3H21v3h3V5.5c0-1.93-1.57-3.5-3.5-3.5Zm-1.5,11v-1c0-1.105-.895-2-2-2h-2c-1.105,0-2,.895-2,2v1h-2v-1c0-1.105-.895-2-2-2h-2c-1.105,0-2,.895-2,2v1H3V5.5c0-.276,.224-.5,.5-.5H20.5c.275,0,.5,.224,.5,.5v7.5h-2Z"/></svg>

);
