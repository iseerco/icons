import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShuttleVan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,2h2.7a3,3,0,0,1,2.742,1.781L23.206,10H15ZM8,2v8h5V2ZM6,10V2H3A3,3,0,0,0,0,5v5ZM0,12v6H24V12.849A5,5,0,0,0,23.912,12Zm3.058,8c-.587,3.954,5.472,3.952,4.884,0Zm17.884,0c.587,3.954-5.472,3.952-4.884,0Z"/></svg>

);
