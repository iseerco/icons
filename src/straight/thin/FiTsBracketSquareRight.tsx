import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBracketSquareRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.5,24h-3.5v-1h3.5c.83,0,1.5-.67,1.5-1.5V2.5c0-.83-.67-1.5-1.5-1.5h-3.5V0h3.5c1.38,0,2.5,1.12,2.5,2.5V21.5c0,1.38-1.12,2.5-2.5,2.5Z"/></svg>

);
