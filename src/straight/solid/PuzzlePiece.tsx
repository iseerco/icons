import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PuzzlePiece = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,10.5a10.02,10.02,0,0,0-2,.272V9a3,3,0,0,0-3-3H12.728A9.929,9.929,0,0,0,13,4,4,4,0,0,0,5,4a9.929,9.929,0,0,0,.272,2H3A3,3,0,0,0,0,9V24H6.536L6.3,23A9.8,9.8,0,0,1,6,21a3,3,0,0,1,6,0,9.8,9.8,0,0,1-.3,2l-.237,1H18V18.228a10.02,10.02,0,0,0,2,.272,4,4,0,0,0,0-8Z"/></svg>

);
