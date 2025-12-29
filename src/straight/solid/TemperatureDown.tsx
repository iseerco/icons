import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TemperatureDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,12.11C16.334,16.363,13.079,24.117,7,24c-6.078.117-9.335-7.638-5-11.89V5c.211-6.609,9.791-6.6,10,0ZM10,17a3,3,0,0,0-2-2.816V12H6v2.184A2.995,2.995,0,1,0,10,17ZM15.707,6.707,14.293,8.121l3.293,3.293a2,2,0,0,0,2.828,0l3.293-3.293L22.293,6.707,20,9V0H18V9Z"/></svg>

);
