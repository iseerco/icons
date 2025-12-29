import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPi = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,1v19.5c0,1.378,1.122,2.5,2.5,2.5s2.5-1.122,2.5-2.5v-.5h1v.5c0,1.93-1.57,3.5-3.5,3.5s-3.5-1.57-3.5-3.5V1h-9v15c0,4.752-3.015,7.874-3.144,8.004l-.713-.701c.028-.029,2.857-2.972,2.857-7.304V1h-.5C1.079,1,1,6.756,1,7H0c0-.07.074-7,6.5-7h17.5v1h-6Z"/></svg>

);
