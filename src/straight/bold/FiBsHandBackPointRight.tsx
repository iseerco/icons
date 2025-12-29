import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHandBackPointRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,6h-5.937l-3.975-3.975c-1.364-1.365-3.584-1.365-4.972,.022L-.015,7.397,.002,22H14.171l2-8h3.829c2.206,0,4-1.794,4-4s-1.794-4-4-4Zm0,5h-6.171l-2,8H2.998l-.012-10.397L7.26,4.146c.196-.194,.513-.193,.708,0l1.854,1.854h-1.821v3h12c.551,0,1,.449,1,1s-.449,1-1,1Z"/></svg>

);
