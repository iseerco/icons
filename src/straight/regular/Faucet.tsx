import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Faucet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.768,19.732c.976.976.976,2.559,0,3.536-.488.488-1.128.732-1.768.732-.64,0-1.28-.244-1.768-.732-.976-.976-.976-2.559,0-3.536l1.768-1.729,1.768,1.729Zm2.232-5.732v2h-8v-2c0-.552-.449-1-1-1H0v-2h9v-4H0v-2h9v-3h-5V0h12v2h-5v3h4c4.962,0,9,4.037,9,9Zm-2,0c0-3.859-3.14-7-7-7h-4v4h4c1.654,0,3,1.346,3,3h4Z"/>
</svg>

);
