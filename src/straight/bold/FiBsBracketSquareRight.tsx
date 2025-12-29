import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBracketSquareRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.5,24h-3.5v-3h3.5c.28,0,.5-.22,.5-.5V3.5c0-.28-.22-.5-.5-.5h-3.5V0h3.5c1.93,0,3.5,1.57,3.5,3.5V20.5c0,1.93-1.57,3.5-3.5,3.5Z"/></svg>

);
