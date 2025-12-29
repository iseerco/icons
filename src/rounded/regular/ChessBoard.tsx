import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessBoard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,14v4H18v4H14V18H10v4H6V18H2V14H6V10H2V6H6V2h4V6h4V2h4V6h4v4H18v4ZM10,10H6V6h4Zm4,0V6h4v4Zm-4,4v4H6V14Zm4,0h4v4H14Zm-4-4h4v4H10Z"/></svg>

);
