import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DistributeSpacingHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,24h-2V0h2V24ZM4,0H2V24h2V0Zm13,4H7V20h10V4Zm-8,2h6v12h-6V6Z"/></svg>

);
