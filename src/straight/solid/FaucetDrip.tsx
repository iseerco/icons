import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FaucetDrip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,17v2h-8v-2c0-.552-.448-1-1-1h-2v-8h2c4.963,0,9,4.037,9,9ZM11,5h5v-2H4v2h5v3H0v8h11V5Z"/>
</svg>

);
