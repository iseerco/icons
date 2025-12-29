import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BracketsSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3,0H7V2H3c-.55,0-1,.45-1,1V21c0,.55,.45,1,1,1H7v2H3c-1.65,0-3-1.35-3-3V3C0,1.35,1.35,0,3,0ZM21,0h-4V2h4c.55,0,1,.45,1,1V21c0,.55-.45,1-1,1h-4v2h4c1.65,0,3-1.35,3-3V3c0-1.65-1.35-3-3-3Z"/></svg>

);
