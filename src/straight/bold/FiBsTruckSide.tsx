import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTruckSide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,5H17V4.5A3.5,3.5,0,0,0,13.5,1H3.5A3.5,3.5,0,0,0,0,4.5V20H3.058A2.424,2.424,0,0,0,3,20.5a2.5,2.5,0,0,0,5,0,2.424,2.424,0,0,0-.058-.5h8.116a2.424,2.424,0,0,0-.058.5,2.5,2.5,0,0,0,5,0,2.424,2.424,0,0,0-.058-.5H24V10.5A5.507,5.507,0,0,0,18.5,5ZM14,17H3V4.5A.5.5,0,0,1,3.5,4h10a.5.5,0,0,1,.5.5Zm4.5-9A2.5,2.5,0,0,1,21,10.5V13H17V8Z"/></svg>

);
