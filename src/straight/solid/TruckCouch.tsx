import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckCouch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,3V17.051c4.92-.557,5.453,6.758.5,6.949a3.516,3.516,0,0,1-2.853-5.514L.666,23.952l-.613-1.9,1.379-.443L.15,17.718a3,3,0,0,1,1.859-3.765l1.534,4.738L16,14.441v2.474l2-.644V3a3,3,0,0,1,3-3h3V2H21A1,1,0,0,0,20,3ZM4.817,16.13l10.7-3.625-1.8-5.444a3,3,0,0,0-3.806-1.9L5.008,6.84A3,3,0,0,0,3.1,10.623Z"/></svg>

);
