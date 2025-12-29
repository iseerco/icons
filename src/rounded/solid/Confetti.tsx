import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Confetti = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><circle cx="5" cy="13" r="1"/><circle cx="1" cy="9" r="1"/><circle cx="5" cy="5" r="1"/><circle cx="1" cy="1" r="1"/><circle cx="23" cy="13" r="1"/><circle cx="19" cy="9" r="1"/><circle cx="23" cy="5" r="1"/><circle cx="19" cy="1" r="1"/><circle cx="14" cy="23" r="1"/><circle cx="10" cy="19" r="1"/><circle cx="14" cy="15" r="1"/><circle cx="10" cy="11" r="1"/><path d="M15,3h0a2,2,0,0,1-2-2h0a1,1,0,0,0-2,0h0A2,2,0,0,1,9,3H9A1,1,0,0,0,9,5H9a2,2,0,0,1,2,2h0a1,1,0,0,0,2,0h0a2,2,0,0,1,2-2h0a1,1,0,0,0,0-2Z"/><path d="M7,19H7a2,2,0,0,1-2-2H5a1,1,0,0,0-2,0H3a2,2,0,0,1-2,2H1a1,1,0,0,0,0,2H1a2,2,0,0,1,2,2H3a1,1,0,0,0,2,0H5a2,2,0,0,1,2-2H7a1,1,0,0,0,0-2Z"/><path d="M23,19h0a2,2,0,0,1-2-2h0a1,1,0,0,0-2,0h0a2,2,0,0,1-2,2h0a1,1,0,0,0,0,2h0a2,2,0,0,1,2,2h0a1,1,0,0,0,2,0h0a2,2,0,0,1,2-2h0a1,1,0,0,0,0-2Z"/></svg>

);
