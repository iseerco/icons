import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCalendarDays = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,2h-3.5V0h-1V2H7V0h-1V2H2.5C1.12,2,0,3.12,0,4.5V24H24V4.5c0-1.38-1.12-2.5-2.5-2.5ZM2.5,3H21.5c.83,0,1.5,.67,1.5,1.5v3.5H1v-3.5c0-.83,.67-1.5,1.5-1.5Zm14.5,6v4h-4.5v-4h4.5Zm-5.5,4H7v-4h4.5v4Zm-5.5,0H1v-4H6v4Zm0,1v4H1v-4H6Zm1,0h4.5v4H7v-4Zm4.5,5v4H7v-4h4.5Zm1,0h4.5v4h-4.5v-4Zm0-1v-4h4.5v4h-4.5Zm5.5-4h5v4h-5v-4Zm0-1v-4h5v4h-5ZM1,19H6v4H1v-4Zm17,4v-4h5v4h-5Z"/></svg>

);
