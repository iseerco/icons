import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckRamp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2h3V0H21a3,3,0,0,0-3,3V16.271L.053,22.048l.613,1.9,16.981-5.466A3.516,3.516,0,0,0,20.5,24c4.954-.192,4.419-7.506-.5-6.949V3A1,1,0,0,1,21,2Z"/></svg>

);
