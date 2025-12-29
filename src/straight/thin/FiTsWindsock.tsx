import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWindsock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,8.686L4.098,4.421c.551-.459,.902-1.15,.902-1.921C5,1.122,3.878,0,2.5,0S0,1.122,0,2.5c0,1.207,.86,2.217,2,2.45V24h1v-5.086l21-4v-6.228Zm-13-1.763l3,.643V15.801l-3,.571V6.923Zm-1,9.64l-3,.571V6.065l3,.643v9.854ZM15,7.78l3,.643v6.616l-3,.571V7.78ZM1,2.5c0-.827,.673-1.5,1.5-1.5s1.5,.673,1.5,1.5-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5Zm2,2.708l3,.643v11.473l-3,.571V5.208ZM23,14.086l-4,.762v-6.211l4,.857v4.592Z"/></svg>

);
