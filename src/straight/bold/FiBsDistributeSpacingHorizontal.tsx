import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDistributeSpacingHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,24h-3V0h3V24ZM5,0H2V24h3V0Zm12,4H7V20h10V4Zm-7,3h4v10h-4V7Z"/></svg>

);
