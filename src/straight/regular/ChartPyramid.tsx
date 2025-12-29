import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartPyramid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.905,1.243a2.088,2.088,0,0,0-3.81,0L0,24H24ZM18.263,16H5.737l1.774-4h8.978ZM11.919,2.062c.016-.035.024-.052.081-.052s.065.017.077.044L15.6,10H8.4ZM4.849,18h14.3l1.774,4H3.075Z"/></svg>

);
