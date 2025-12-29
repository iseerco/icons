import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BracketSquareRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,24h-4v-2h4c.55,0,1-.45,1-1V3c0-.55-.45-1-1-1h-4V0h4c1.65,0,3,1.35,3,3V21c0,1.65-1.35,3-3,3Z"/></svg>

);
