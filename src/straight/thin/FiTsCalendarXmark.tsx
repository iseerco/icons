import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCalendarXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5,2h-3.5V0h-1v2H7V0h-1v2h-3.5c-1.378,0-2.5,1.121-2.5,2.5v19.5h24V4.5c0-1.379-1.122-2.5-2.5-2.5ZM2.5,3h19c.827,0,1.5.673,1.5,1.5v3.5H1v-3.5c0-.827.673-1.5,1.5-1.5Zm-1.5,20v-14h22v14H1Zm14.854-10.146l-3.146,3.146,3.146,3.146-.707.707-3.146-3.146-3.146,3.146-.707-.707,3.146-3.146-3.146-3.146.707-.707,3.146,3.146,3.146-3.146.707.707Z"/></svg>

);
