import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DriverMan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,12c-3.309,0-6-2.691-6-6S8.691,0,12,0s6,2.691,6,6-2.691,6-6,6Zm0,8c-2.206,0-4,1.794-4,4h8c0-2.206-1.794-4-4-4Zm8.497-3.011c-.671-2.349-2.846-3.989-5.289-3.989h-6.417c-2.442,0-4.617,1.64-5.289,3.989l-2.003,7.011h4.5c0-3.309,2.691-6,6-6s6,2.691,6,6h4.5l-2.003-7.011Z"/>
</svg>

);
