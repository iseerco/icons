import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mailbox = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,3H9.883c1.344,1.314,2.117,3.118,2.117,5v10c0,1.13-.391,2.162-1.026,3h10.026c1.654,0,3-1.346,3-3V9c0-3.309-2.691-6-6-6Zm3,9c-.006,1.308-1.995,1.307-2,0v-1h-3c-1.308-.006-1.307-1.995,0-2h4c.553,0,1,.448,1,1v2ZM4.501,3.024C1.903,3.278,0,5.612,0,8.222v9.778c0,1.657,1.343,3,3,3H7c1.657,0,3-1.343,3-3V8c0-2.922-2.519-5.266-5.499-4.976Zm1.499,7.976h-2c-1.308-.006-1.307-1.994,0-2h2c1.308,.006,1.307,1.994,0,2Z"/></svg>

);
