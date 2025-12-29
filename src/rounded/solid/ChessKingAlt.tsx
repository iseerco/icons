import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessKingAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7,8H7.4S6.307,6.318,6.288,6.277A3,3,0,0,1,9,2h2V1a1,1,0,0,1,2,0V2h2a3,3,0,0,1,2.715,4.277C17.7,6.318,16.608,8,16.608,8H17a1,1,0,0,1,0,2H7A1,1,0,0,1,7,8ZM20,20H4a2,2,0,0,0,0,4H20a2,2,0,0,0,0-4Zm-3.589-8H7.589a27.85,27.85,0,0,1-2.2,6H18.606A27.754,27.754,0,0,1,16.411,12Z"/></svg>

);
