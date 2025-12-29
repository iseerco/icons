import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Jam = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,12a8.257,8.257,0,0,0,1-.074V18a6.006,6.006,0,0,1-6,6H8a6.006,6.006,0,0,1-6-6V11.923A6.07,6.07,0,0,0,6,11.2a6.11,6.11,0,0,0,6,0,6.112,6.112,0,0,0,6,0A5.931,5.931,0,0,0,21,12ZM20,5V2.5A2.5,2.5,0,0,0,17.5,0H6.5A2.587,2.587,0,0,0,4,3H15a1,1,0,0,1,0,2H4c-4.973.85-5.252,4.945-1,5a3.965,3.965,0,0,0,2.444-.833.952.952,0,0,1,1.108,0,4.058,4.058,0,0,0,4.893,0,.946.946,0,0,1,1.11,0,4.058,4.058,0,0,0,4.893,0,.952.952,0,0,1,1.108,0A3.965,3.965,0,0,0,21,10C25.252,10.017,24.972,5.859,20,5Z"/></svg>

);
