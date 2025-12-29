import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Caravan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,18V3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3V20H4c.138,5.276,7.863,5.272,8,0H24V18ZM2,8H7v2H2ZM8,22a2,2,0,0,1,0-4A2,2,0,0,1,8,22Zm0-6a3.987,3.987,0,0,0-3.444,2H2V12H9V6H2V3A1,1,0,0,1,3,2H19a1,1,0,0,1,1,1V18H18V6H11V17.382A3.974,3.974,0,0,0,8,16Zm8,2H13V8h3Z"/></svg>

);
