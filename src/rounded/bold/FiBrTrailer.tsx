import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTrailer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,19.086V5.5A5.506,5.506,0,0,0,17.5,0H5.5A5.506,5.506,0,0,0,0,5.5v11a5.5,5.5,0,0,0,1.375,3.639,1.5,1.5,0,0,0,2.25-1.987A2.493,2.493,0,0,1,3,16.5V15H20v4H15.5a1.5,1.5,0,0,0,0,3h7A1.5,1.5,0,0,0,23,19.086ZM18,12V6.5a1.5,1.5,0,0,0-3,0V12H13V6.5a1.5,1.5,0,0,0-3,0V12H8V6.5a1.5,1.5,0,0,0-3,0V12H3V5.5A2.5,2.5,0,0,1,5.5,3h12A2.5,2.5,0,0,1,20,5.5V12Zm-6,8.5a3.5,3.5,0,0,1-7,0A3.5,3.5,0,0,1,12,20.5Z"/></svg>

);
