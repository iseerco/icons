import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowRightToBracket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.41,13.41l-5.5,5.5-1.41-1.41,4.5-4.5H0v-2H15l-4.5-4.5,1.41-1.41,5.5,5.5c.78,.78,.78,2.05,0,2.83ZM21,0h-5V2h5c.55,0,1,.45,1,1V21c0,.55-.45,1-1,1h-5v2h5c1.65,0,3-1.35,3-3V3c0-1.65-1.35-3-3-3Z"/></svg>

);
