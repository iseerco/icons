import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckPickup = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,18H2a2,2,0,0,1-2-2V15a4,4,0,0,1,4-4H20a4,4,0,0,1,4,4v1A2,2,0,0,1,22,18ZM3.058,20c-.587,3.954,5.472,3.952,4.884,0Zm13,0c-.587,3.954,5.472,3.952,4.884,0ZM19.825,9,16.438,4.141A5,5,0,0,0,12.335,2H11.5A2.5,2.5,0,0,0,9,4.5V9Z"/></svg>

);
