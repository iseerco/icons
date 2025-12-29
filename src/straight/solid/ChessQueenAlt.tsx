import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessQueenAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.225,6l1.7-5.89L14,2,12,.031,10,2,6.077.11,7.775,6H6V8H18V6ZM22,24H2V23a3,3,0,0,1,3-3H19a3,3,0,0,1,3,3ZM16.357,10a50.4,50.4,0,0,0,2.327,8H5.316a50.6,50.6,0,0,0,2.327-8Z"/></svg>

);
