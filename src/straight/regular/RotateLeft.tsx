import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RotateLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0c-2.978,0-5.821,1.111-8,3.057V0H2V5c0,1.103,.897,2,2,2h5v-2H4.86c1.867-1.901,4.437-3,7.14-3,5.514,0,10,4.486,10,10s-4.486,10-10,10S2,17.514,2,12H0c0,6.617,5.383,12,12,12s12-5.383,12-12S18.617,0,12,0Z"/></svg>

);
