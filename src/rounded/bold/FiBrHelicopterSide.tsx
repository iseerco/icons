import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrHelicopterSide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.182,19A4.824,4.824,0,0,0,24,14.182a8.193,8.193,0,0,0-7-8.1V4h5.5a1.5,1.5,0,0,0,0-3H16.914a1.511,1.511,0,0,0-2.828,0H8.5a1.5,1.5,0,0,0,0,3H14V6H3V5.5a1.5,1.5,0,0,0-3,0V6.822a4.51,4.51,0,0,0,3.315,4.342l3.685,1v.559a6.282,6.282,0,0,0,4,5.847V21H8.5a1.5,1.5,0,0,0,0,3h13A2.448,2.448,0,0,0,24,21.5a1.505,1.505,0,0,0-2.915-.5H19V19ZM10,12.727v-1.7A1.5,1.5,0,0,0,8.9,9.576L6.784,9H15v3a2,2,0,0,0,2,2h4a1.832,1.832,0,0,1-1.814,2h-5.91A3.276,3.276,0,0,1,10,12.727ZM16,21H14V19h2Z"/></svg>

);
