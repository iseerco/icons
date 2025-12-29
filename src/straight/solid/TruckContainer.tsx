import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckContainer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,1H3A3,3,0,0,0,0,4V14H14V4A3,3,0,0,0,11,1ZM4,11H2V4H4Zm4,0H6V4H8Zm2,0V4h2v7H10m6,0V5h3.559A3,3,0,0,1,22.4,7.051L23.721,11ZM0,18V16H16V13h8v5Zm.058,2c-.587,3.954,5.472,3.952,4.884,0Zm7,0c-.587,3.954,5.472,3.952,4.884,0Zm10,0c-.587,3.954,5.472,3.952,4.884,0Z"/></svg>

);
