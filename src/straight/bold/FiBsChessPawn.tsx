import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChessPawn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,16.5V14h3V11H17.741A7,7,0,1,0,6.259,11H4v3H7v2.5C7,18.855,4.617,21,2,21v3H22V21C19.383,21,17,18.855,17,16.5ZM8,7a4,4,0,1,1,4,4A4,4,0,0,1,8,7Zm.3,14A7.078,7.078,0,0,0,10,16.5V14h4v2.5A7.078,7.078,0,0,0,15.7,21Z"/></svg>

);
