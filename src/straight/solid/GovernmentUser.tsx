import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GovernmentUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m5,5C5,2.243,7.243,0,10,0s5,2.243,5,5-2.243,5-5,5-5-2.243-5-5ZM24,0h-7v2h1v6.5l2.5-2.5,2.5,2.5V2h1V0ZM0,22h1v2h18v-2h1v-2H0v2Zm12.333-11l-1.571,2.356,1.055,4.644h6.182v-2c0-2.757-2.243-5-5-5h-.667Zm-3.096,2.356l-1.571-2.356h-.667c-2.757,0-5,2.243-5,5v2h6.182l1.055-4.644Z"/>
</svg>

);
