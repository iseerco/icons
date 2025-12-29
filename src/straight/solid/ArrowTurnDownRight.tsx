import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowTurnDownRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.42,13.55l-5.68-6.22-1.48,1.35,4.86,5.33H3c-.55,0-1-.45-1-1V3H0V13c0,1.65,1.35,3,3,3H21.12l-4.86,5.33,1.48,1.35,5.65-6.19c.82-.82,.82-2.15,.03-2.94Z"/></svg>

);
