import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsStethoscope = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,8.5c0-1.378-1.121-2.5-2.5-2.5s-2.5,1.122-2.5,2.5c0,1.207.86,2.217,2,2.45v5.05c0,3.86-3.141,7-7,7s-7-3.14-7-7v-1.019c3.351-.256,6-3.065,6-6.481V2.5c0-1.378-1.121-2.5-2.5-2.5h-2.5v1h2.5c.827,0,1.5.673,1.5,1.5v6c0,3.033-2.468,5.5-5.5,5.5S1,11.533,1,8.5V2.5c0-.827.673-1.5,1.5-1.5h2.5V0h-2.5C1.121,0,0,1.122,0,2.5v6c0,3.416,2.649,6.225,6,6.481v1.019c0,4.411,3.589,8,8,8s8-3.589,8-8v-5.05c1.14-.232,2-1.242,2-2.45Zm-2.5,1.5c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Z"/>
</svg>

);
