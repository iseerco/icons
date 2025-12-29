import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Triangle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.948,24H4.052A4.03,4.03,0,0,1,.6,22.088a3.947,3.947,0,0,1-.182-3.86L8.38,4.212a4.068,4.068,0,0,1,7.253.026l7.922,13.941a3.967,3.967,0,0,1-.156,3.909A4.03,4.03,0,0,1,19.948,24ZM12,4a2.013,2.013,0,0,0-1.842,1.129l-.026.049L2.184,19.167A1.919,1.919,0,0,0,2.3,21.034,2.044,2.044,0,0,0,4.052,22h15.9a2.044,2.044,0,0,0,1.752-.966,1.937,1.937,0,0,0,.09-1.916L13.868,5.178A2.039,2.039,0,0,0,12,4Z"/></svg>

);
