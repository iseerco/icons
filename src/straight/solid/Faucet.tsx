import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Faucet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.768,23.268c-.488.488-1.128.732-1.768.732-.64,0-1.28-.244-1.768-.732-.976-.976-.976-2.559,0-3.536l1.768-1.729,1.768,1.729c.976.976.976,2.559,0,3.536ZM11,2h5V0H4v2h5v3H0v8h11V2Zm4,3h-2v8h2c.551,0,1,.448,1,1v2h8v-2c0-4.963-4.038-9-9-9Z"/>
</svg>

);
