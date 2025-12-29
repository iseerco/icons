import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MessageArrowUpRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20,0H4C1.794,0,0,1.794,0,4v12c0,2.206,1.794,4,4,4h2.923l3.748,3.156c.382.34.862.509,1.338.509.467,0,.931-.163,1.292-.485l3.847-3.18h2.852c2.206,0,4-1.794,4-4V4c0-2.206-1.794-4-4-4Zm-3,13c0,.553-.448,1-1,1s-1-.447-1-1v-3.56l-5.294,5.269c-.195.194-.451.291-.706.291-.257,0-.513-.099-.709-.295-.39-.392-.388-1.024.003-1.414l5.317-5.291h-3.611c-.552,0-1-.447-1-1s.448-1,1-1h4c1.654,0,3,1.346,3,3v4Z"/></svg>

);
