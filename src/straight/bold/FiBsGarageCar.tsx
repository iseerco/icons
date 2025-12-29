import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGarageCar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,22h4v2H10Zm.231-6L9.5,19h5l-.731-3ZM24,10.132V24H17V20.347a5.02,5.02,0,0,0-.234-1.513L15.675,15.4A1.993,1.993,0,0,0,13.769,14H10.231A1.993,1.993,0,0,0,8.325,15.4l-1.091,3.44A5.009,5.009,0,0,0,7,20.347V24H0V10.132A3.4,3.4,0,0,1,1.307,7.447L9.9.724a3.409,3.409,0,0,1,4.2,0l8.592,6.723A3.4,3.4,0,0,1,24,10.132Zm-3,0a.415.415,0,0,0-.158-.323l-8.59-6.722a.413.413,0,0,0-.506,0L3.157,9.81A.414.414,0,0,0,3,10.132V21H5V12.5A2.5,2.5,0,0,1,7.5,10h9A2.5,2.5,0,0,1,19,12.5V21h2Z"/></svg>

);
