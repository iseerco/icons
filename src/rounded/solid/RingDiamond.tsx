import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RingDiamond = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14.932,6.5l1.668-2.11c.594-.791.514-1.915-.216-2.644l-1.612-1.482c-.185-.169-.426-.264-.677-.264h-4.19c-.25,0-.492.094-.677.264l-1.642,1.511c-.7.7-.779,1.824-.17,2.634l1.653,2.091c-3.526,1.22-6.068,4.565-6.068,8.5,0,4.962,4.038,9,9,9s9-4.038,9-9c0-3.935-2.543-7.28-6.068-8.5Zm-2.932,15.5c-3.86,0-7-3.14-7-7s3.14-7,7-7,7,3.14,7,7-3.14,7-7,7Z"/>
</svg>

);
