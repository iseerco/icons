import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Humidity = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.213,1.177a4.947,4.947,0,0,0-6.426,0C2.706,6.231-2.63,13.491,4.222,20.778a11.052,11.052,0,0,0,15.556,0C26.636,13.442,21.3,6.257,15.213,1.177ZM8,10a1,1,0,0,1,2,0A1,1,0,0,1,8,10Zm2.832,6.555a1,1,0,1,1-1.664-1.11l4-6a1,1,0,0,1,1.664,1.11ZM15,17a1,1,0,0,1,0-2A1,1,0,0,1,15,17Z"/></svg>

);
