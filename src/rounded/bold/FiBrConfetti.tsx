import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrConfetti = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.136,18.855h0a2.9,2.9,0,0,1-1.991-1.991h0a1.191,1.191,0,0,0-2.29,0h0a2.9,2.9,0,0,1-1.991,1.991h0a1.191,1.191,0,0,0,0,2.29h0a2.9,2.9,0,0,1,1.991,1.991h0a1.191,1.191,0,0,0,2.29,0h0a2.9,2.9,0,0,1,1.991-1.991h0A1.191,1.191,0,0,0,23.136,18.855Z"/><path d="M15.137,2.855h0A2.9,2.9,0,0,1,13.145.864h0a1.191,1.191,0,0,0-2.29,0h0A2.9,2.9,0,0,1,8.864,2.855h0a1.191,1.191,0,0,0,0,2.29h0a2.9,2.9,0,0,1,1.991,1.991h0a1.191,1.191,0,0,0,2.29,0h0a2.9,2.9,0,0,1,1.991-1.991h0A1.191,1.191,0,0,0,15.137,2.855Z"/><path d="M.863,21.145h0a2.9,2.9,0,0,1,1.991,1.991h0a1.191,1.191,0,0,0,2.29,0h0a2.9,2.9,0,0,1,1.991-1.991h0a1.191,1.191,0,0,0,0-2.29h0a2.9,2.9,0,0,1-1.991-1.991h0a1.191,1.191,0,0,0-2.29,0h0A2.9,2.9,0,0,1,.864,18.855h0A1.191,1.191,0,0,0,.863,21.145Z"/><circle cx="5.5" cy="13.5" r="1.5"/><circle cx="1.5" cy="9.5" r="1.5"/><circle cx="5.5" cy="5.5" r="1.5"/><circle cx="1.5" cy="1.5" r="1.5"/><circle cx="22.5" cy="13.5" r="1.5"/><circle cx="18.5" cy="9.5" r="1.5"/><circle cx="22.5" cy="5.5" r="1.5"/><circle cx="18.5" cy="1.5" r="1.5"/><circle cx="14.5" cy="22.5" r="1.5"/><circle cx="10.5" cy="18.5" r="1.5"/><circle cx="14.5" cy="14.5" r="1.5"/><circle cx="10.5" cy="10.5" r="1.5"/></svg>

);
