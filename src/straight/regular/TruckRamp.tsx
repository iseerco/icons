import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckRamp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2h3V0H21a3,3,0,0,0-3,3V16.271L.053,22.048l.613,1.9,15.468-4.979A4.018,4.018,0,0,0,20,24c5.274-.138,5.274-7.863,0-8V3A1,1,0,0,1,21,2Zm1,18a2,2,0,0,1-4,0A2,2,0,0,1,22,20Z"/></svg>

);
