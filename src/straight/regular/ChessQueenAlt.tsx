import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessQueenAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,18h-.316A43.959,43.959,0,0,1,16.075,8H18V6H16.225l1.7-5.89L14.157,1.829,12,.031l-2.157,1.8L6.077.11,7.775,6H6V8H7.925A44.018,44.018,0,0,1,5.316,18H5a3,3,0,0,0-3,3v3H22V21A3,3,0,0,0,19,18ZM9.2,3.735l.953.436L12,2.635l1.843,1.536.953-.436L14.144,6H9.856ZM9.933,8h4.134a43.091,43.091,0,0,0,2.481,10h-9.1A43.091,43.091,0,0,0,9.933,8ZM20,22H4V21a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z"/></svg>

);
