import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTruckRamp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,17a3.432,3.432,0,0,0-.5.036V5.5A2.5,2.5,0,0,1,22.5,3a1.5,1.5,0,0,0,0-3A5.506,5.506,0,0,0,17,5.5V16.377L1.077,21.061a1.5,1.5,0,0,0,.846,2.878l15.235-4.481A3.5,3.5,0,1,0,20.5,17Z"/></svg>

);
