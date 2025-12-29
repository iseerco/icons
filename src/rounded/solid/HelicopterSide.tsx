import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HelicopterSide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,19a1,1,0,0,0-1,1,1,1,0,0,1-1,1H19V19a5.009,5.009,0,0,0,4.9-4H17a3,3,0,0,1-3-3V6H2V5A1,1,0,0,0,0,5S.012,7.18.035,7.264A4.019,4.019,0,0,0,2.9,10.583L7,11.754V13a6,6,0,0,0,4,5.65V21H7a1,1,0,0,0,0,2H21a3,3,0,0,0,3-3A1,1,0,0,0,23,19ZM13,19h4v2H13ZM16,6H14V4H7A1,1,0,0,1,7,2h7a1,1,0,0,1,2,0h7a1,1,0,0,1,0,2H16Zm0,6V6a8.008,8.008,0,0,1,7.931,7H17A1,1,0,0,1,16,12Z"/></svg>

);
