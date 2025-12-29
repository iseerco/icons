import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTimeWatchCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,14v-2h-3v2h-2v-2h-3v2c-1.103,0-2,.897-2,2v8h12v-8c0-1.103-.897-2-2-2Zm-7,7v-3h6v3h-6Zm-6-15.643h3v6.026l-4.629,2.571-1.457-2.622,3.086-1.715v-4.26Zm1,12.618v3c-5.557-.264-10-4.854-10-10.475C0,4.71,4.71,0,10.5,0c5.621,0,10.211,4.443,10.475,10h-3c-.259-3.902-3.508-7-7.475-7-4.136,0-7.5,3.364-7.5,7.5,0,3.967,3.098,7.216,7,7.475Z"/>
</svg>

);
