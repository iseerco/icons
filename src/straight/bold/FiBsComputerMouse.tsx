import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsComputerMouse = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15.5,3h-2V0h-3v3h-2c-3.033,0-5.5,2.467-5.5,5.5v6.5c0,4.962,4.038,9,9,9s9-4.038,9-9v-6.5c0-3.033-2.468-5.5-5.5-5.5Zm0,3c1.379,0,2.5,1.122,2.5,2.5v1.5h-4.5v-4h2Zm-7,0h2v4h-4.5v-1.5c0-1.378,1.122-2.5,2.5-2.5Zm3.5,15c-3.309,0-6-2.691-6-6v-2h12v2c0,3.309-2.691,6-6,6Z"/>
</svg>

);
