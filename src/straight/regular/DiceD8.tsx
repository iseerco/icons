import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiceD8 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.109.867A3.034,3.034,0,0,0,9.846.915L.025,12,9.891,23.133A2.977,2.977,0,0,0,12,24a3.008,3.008,0,0,0,2.155-.916L23.96,12Zm6.629,10.509L13,13.662V2.628ZM11,2.624V13.662L3.253,11.373ZM4.25,13.753,11,15.747v5.626ZM13,21.375V15.747l6.736-1.99Z"/></svg>

);
