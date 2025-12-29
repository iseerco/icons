import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FaucetDrip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15,8h-4v-3h5v-2H4v2h5v3H0v2h9v4H0v2h15c.552,0,1,.448,1,1v2h8v-2c0-4.963-4.037-9-9-9Zm3,9c0-1.654-1.346-3-3-3h-4v-4h4c3.859,0,7,3.141,7,7h-4Z"/>
</svg>

);
