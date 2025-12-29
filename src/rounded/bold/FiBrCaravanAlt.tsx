import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCaravanAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,19.5A1.5,1.5,0,0,1,22.5,21h-7a1.5,1.5,0,0,1,0-3H20V5.5A2.5,2.5,0,0,0,17.5,3H5.5A2.5,2.5,0,0,0,3,5.5V16a1.764,1.764,0,0,0,.533,1.338,1.5,1.5,0,0,1-2.066,2.176A4.718,4.718,0,0,1,0,16V5.5A5.506,5.506,0,0,1,5.5,0h12A5.506,5.506,0,0,1,23,5.5V18.086A1.5,1.5,0,0,1,24,19.5ZM8.5,17a3.5,3.5,0,0,0,0,7A3.5,3.5,0,0,0,8.5,17Zm8-5A1.5,1.5,0,0,0,18,10.5v-2A1.5,1.5,0,0,0,16.5,7h-2A1.5,1.5,0,0,0,13,8.5v2A1.5,1.5,0,0,0,14.5,12Zm-7,0A1.5,1.5,0,0,0,11,10.5v-2A1.5,1.5,0,0,0,9.5,7h-3A1.5,1.5,0,0,0,5,8.5v2A1.5,1.5,0,0,0,6.5,12Z"/></svg>

);
