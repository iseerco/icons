import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowTurnDownLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,3V13c0,1.65-1.35,3-3,3H2.88l4.86,5.33-1.48,1.35L.58,16.45c-.79-.79-.79-2.12,.03-2.94L6.26,7.33l1.48,1.35L2.88,14H21c.55,0,1-.45,1-1V3h2Z"/></svg>

);
