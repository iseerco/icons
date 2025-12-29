import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BracketSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,24h-4c-1.65,0-3-1.35-3-3V3c0-1.65,1.35-3,3-3h4V2h-4c-.55,0-1,.45-1,1V21c0,.55,.45,1,1,1h4v2Z"/></svg>

);
