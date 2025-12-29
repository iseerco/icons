import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWallet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2.5,3H24v-1H2.5C1.121,2,0,3.122,0,4.5v15c0,1.378,1.121,2.5,2.5,2.5H24V6H2.5c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5Zm0,4H23v14H2.5c-.827,0-1.5-.673-1.5-1.5V6.499c.418,.314,.937,.501,1.5,.501Zm16.5,7c0-.552,.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Z"/></svg>

);
