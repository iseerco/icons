import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessPawnAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,18c-1.988,0-4-3.435-4-10h2V6H15.444A3.959,3.959,0,0,0,16,4,4,4,0,0,0,8,4a3.959,3.959,0,0,0,.556,2H7V8H9c0,6.565-2.012,10-4,10a3,3,0,0,0-3,3v3H22V21A3,3,0,0,0,19,18ZM10,4a2,2,0,1,1,2,2A2,2,0,0,1,10,4Zm1,4h2c0,4.469.888,7.961,2.412,10H8.588C10.112,15.961,11,12.469,11,8Zm9,14H4V21a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z"/></svg>

);
