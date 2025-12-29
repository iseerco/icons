import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDiceTwo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,24H5.5A5.507,5.507,0,0,1,0,18.5V5.5A5.507,5.507,0,0,1,5.5,0h13A5.507,5.507,0,0,1,24,5.5v13A5.507,5.507,0,0,1,18.5,24ZM5.5,3A2.5,2.5,0,0,0,3,5.5v13A2.5,2.5,0,0,0,5.5,21h13A2.5,2.5,0,0,0,21,18.5V5.5A2.5,2.5,0,0,0,18.5,3ZM6,7.5A1.5,1.5,0,1,0,7.5,6,1.5,1.5,0,0,0,6,7.5Zm9,9A1.5,1.5,0,1,0,16.5,15,1.5,1.5,0,0,0,15,16.5Z"/></svg>

);
