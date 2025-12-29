import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SignalBarsWeak = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9,24H3v-6c0-1.103.897-2,2-2h2c1.103,0,2,.897,2,2v6Zm-4-2h2v-4h-2v4Z"/></svg>

);
