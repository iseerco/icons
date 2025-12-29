import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PizzaSlice = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.424,21.974a4.943,4.943,0,0,1-5.176,1.874h0A15.857,15.857,0,0,1,.153,12.753,4.937,4.937,0,0,1,2.027,7.584,14.429,14.429,0,0,0,16.424,21.974Zm7.408-18.3L17.4,20H17A12.574,12.574,0,0,1,4,7V6.6L20.3.178A2.749,2.749,0,0,1,23.832,3.673ZM12,10a2,2,0,0,0-4,0A2,2,0,0,0,12,10Zm6.122,2.716L20.676,6.23C16.416,4.738,14.058,10.906,18.122,12.716Z"/></svg>

);
