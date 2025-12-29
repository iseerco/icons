import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHouseChimneyUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.968,7.866l-1.968-1.542V2h-1v3.541L13.658.572c-.976-.765-2.34-.765-3.317,0L1.032,7.866c-.656.514-1.032,1.287-1.032,2.121v14.013h24v-14.013c0-.834-.376-1.607-1.032-2.121Zm-5.968,15.134H7v-3.5c0-.827.673-1.5,1.5-1.5h7c.827,0,1.5.673,1.5,1.5v3.5Zm6,0h-5v-3.5c0-1.378-1.122-2.5-2.5-2.5h-7c-1.378,0-2.5,1.122-2.5,2.5v3.5H1v-13.013c0-.524.236-1.01.649-1.333L10.958,1.359c.614-.48,1.47-.48,2.083,0l9.31,7.294c.413.323.649.809.649,1.333v13.013ZM12,7c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,7c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Z"/>
</svg>

);
