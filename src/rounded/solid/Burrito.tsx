import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Burrito = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,8v6.5a19.475,19.475,0,0,0-5.265-4.681A9.771,9.771,0,0,1,20,8Zm-.071,10.872A6,6,0,0,1,14,24H10a6.006,6.006,0,0,1-6-6V8C8.079,8,18.427,12.574,19.929,18.872ZM9,20a1,1,0,0,0-2,0A1,1,0,0,0,9,20Zm2-3a1,1,0,0,0-2,0A1,1,0,0,0,11,17Zm2,3a1,1,0,0,0-2,0A1,1,0,0,0,13,20ZM18,1a2.982,2.982,0,0,0-1.137.224A4.07,4.07,0,0,0,12,.545a4.07,4.07,0,0,0-4.863.679C4.234.047,1.811,3.515,3.623,6A13.085,13.085,0,0,1,8.5,7.048c.821-.869,2.233-3.63,3.543-2.107.666,1.224-1.145,1.91-1.649,2.912.7.33,1.413.7,2.127,1.114A12.376,12.376,0,0,1,20.384,6,3.12,3.12,0,0,0,18,1Z"/></svg>

);
