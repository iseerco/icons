import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DriverMan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,12c3.309,0,6-2.691,6-6S15.309,0,12,0s-6,2.691-6,6,2.691,6,6,6Zm0-10c2.206,0,4,1.794,4,4s-1.794,4-4,4-4-1.794-4-4,1.794-4,4-4Zm6,22h-2c0-2.206-1.794-4-4-4s-4,1.794-4,4h-2c0-3.309,2.691-6,6-6s6,2.691,6,6Zm4.5,0h-1.961l-1.965-6.462c-.427-1.494-1.811-2.538-3.365-2.538h-6.353c-1.554,0-2.938,1.044-3.366,2.538l-1.749,6.462H1.564l2.003-7.011c.671-2.349,2.846-3.989,5.289-3.989h6.353c2.442,0,4.617,1.64,5.289,3.989l2.003,7.011Z"/>
</svg>

);
