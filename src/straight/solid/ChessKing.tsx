import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessKing = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M.134,12.14A2.994,2.994,0,0,1,2.122,8.389,38.51,38.51,0,0,1,11,7.023V5H8V3h3V0h2V3h3V5H13V7.023a38.51,38.51,0,0,1,8.878,1.366,3,3,0,0,1,1.989,3.751L21.448,20H2.552ZM2,22v2H22V22Z"/></svg>

);
