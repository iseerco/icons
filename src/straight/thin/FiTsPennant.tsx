import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPennant = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3.819,4.622c.708-.442,1.181-1.228,1.181-2.122C5,1.122,3.879,0,2.5,0S0,1.122,0,2.5c0,1.207,.86,2.217,2,2.45V24h1v-3.162L23.856,12.496,3.819,4.622ZM1,2.5c0-.827,.673-1.5,1.5-1.5s1.5,.673,1.5,1.5-.673,1.5-1.5,1.5c-.91,0-1.5-.692-1.5-1.5Zm2,2.875l18.144,7.129L3,19.762V5.375Z"/></svg>

);
