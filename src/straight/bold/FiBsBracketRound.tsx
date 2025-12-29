import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBracketRound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.34,21.66l-1.92,2.31c-.22-.18-5.43-4.58-5.43-11.96S13.21,.22,13.43,.04l1.91,2.31s-4.34,3.71-4.34,9.65,4.3,9.62,4.34,9.66Z"/></svg>

);
