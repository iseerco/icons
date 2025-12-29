import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SignalBarsWeak = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5,18.5v5.5H1v-5.5c0-.827.673-1.5,1.5-1.5h1c.827,0,1.5.673,1.5,1.5Z"/></svg>

);
