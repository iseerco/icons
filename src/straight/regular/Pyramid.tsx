import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pyramid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,2.01c.057,0,.065.017.077.044L20.925,22H3.075L11.919,2.062c.016-.035.024-.052.081-.052m0-2a2.061,2.061,0,0,0-1.9,1.233L0,24H24L13.905,1.243A2.061,2.061,0,0,0,12,.01Z"/></svg>

);
