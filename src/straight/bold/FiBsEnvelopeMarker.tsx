import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsEnvelopeMarker = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,15h3v9H0V6.5A3.5,3.5,0,0,1,3.5,3H13V6H3.5a.5.5,0,0,0-.5.5v.46l7.361,7.361a2.373,2.373,0,0,0,3.278,0l.327-.327A3.334,3.334,0,0,0,16.356,15l.847,0L15.76,16.442a5.317,5.317,0,0,1-7.521,0L3,11.2V21H21ZM15,0V11.647A1.35,1.35,0,0,0,17.193,12.7L19.5,10.856,21.807,12.7A1.35,1.35,0,0,0,24,11.647V0Z"/></svg>

);
