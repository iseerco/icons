import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AngleSquareDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,16a1.993,1.993,0,0,1-1.414-.585L5.913,10.741,7.327,9.327,12,14l4.712-4.711L18.126,10.7l-4.712,4.711A1.993,1.993,0,0,1,12,16ZM24,3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3V24H24ZM2,3A1,1,0,0,1,3,2H21a1,1,0,0,1,1,1V22H2Z"/></svg>

);
