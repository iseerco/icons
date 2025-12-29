import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SignalBarsWeak = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5,19v3c0,1.105-.895,2-2,2h0c-1.105,0-2-.895-2-2v-3c0-1.105.895-2,2-2h0c1.105,0,2,.895,2,2Z"/></svg>

);
