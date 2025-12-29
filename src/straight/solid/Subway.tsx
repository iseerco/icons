import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Subway = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,4H2A4,4,0,0,1,6,0H18A4,4,0,0,1,22,4ZM11,6H2v5h9Zm2,5h9V6H13ZM2,13H22v6H17.785l3.062,5H18.5L15.44,19H8.655L5.593,24H3.248L6.31,19H2Zm15,4a1,1,0,0,0,0-2A1,1,0,0,0,17,17ZM7,17a1,1,0,0,0,0-2A1,1,0,0,0,7,17Z"/></svg>

);
