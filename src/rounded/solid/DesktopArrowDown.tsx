import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DesktopArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m.101,15h23.798c-.465,2.279-2.484,4-4.899,4h-6v2h4c.552,0,1,.448,1,1s-.448,1-1,1H7c-.552,0-1-.448-1-1s.448-1,1-1h4v-2h-6c-2.414,0-4.434-1.721-4.899-4ZM19,1h-6v7.421l2.319-2.154c.403-.375,1.038-.354,1.413.053.376.405.353,1.037-.052,1.413l-2.613,2.426c-.561.561-1.308.843-2.058.843-.76,0-1.523-.289-2.104-.869l-2.587-2.4c-.404-.376-.428-1.008-.052-1.413.374-.406,1.009-.428,1.413-.053l2.319,2.153V1h-6C2.243,1,0,3.243,0,6v7h24v-7c0-2.757-2.243-5-5-5Z"/>
</svg>

);
