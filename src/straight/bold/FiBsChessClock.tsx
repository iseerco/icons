import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChessClock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,8.5A3.5,3.5,0,0,0,20.5,5H20V3H14V5H8V3h2V0H3V3H5V5H3.5A3.5,3.5,0,0,0,0,8.5V22H2v2H5V22H19v2h3V22h2ZM3,8.5A.5.5,0,0,1,3.5,8h17a.5.5,0,0,1,.5.5V19H3Zm7.865,4.088-1.906.952,1.884.942a3.5,3.5,0,1,1,.022-1.894ZM20,13.5a3.465,3.465,0,0,1-.477,1.734L17.5,14.56l.666,2A3.456,3.456,0,0,1,16.5,17,3.5,3.5,0,1,1,20,13.5Z"/></svg>

);
