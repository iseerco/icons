import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckMoving = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4.942,20C5.529,23.954-.53,23.952.058,20ZM22.4,7.051A3,3,0,0,0,19.559,5H16v6h7.721ZM7.058,20c-.587,3.954,5.472,3.952,4.884,0ZM11,1H3A3,3,0,0,0,0,4V18H14V4A3,3,0,0,0,11,1ZM24,13H16v5h8Zm-6.942,7c-.587,3.954,5.472,3.952,4.884,0Z"/></svg>

);
