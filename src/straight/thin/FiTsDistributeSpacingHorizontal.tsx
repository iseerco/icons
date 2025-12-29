import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDistributeSpacingHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,24h-1V0h1V24ZM3,0h-1V24h1V0Zm14,4H7V20h10V4Zm-9,1h8v14H8V5Z"/></svg>

);
