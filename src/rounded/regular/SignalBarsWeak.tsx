import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SignalBarsWeak = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6.5,16h-1c-1.379,0-2.5,1.121-2.5,2.5v3c0,1.379,1.121,2.5,2.5,2.5h1c1.379,0,2.5-1.121,2.5-2.5v-3c0-1.379-1.121-2.5-2.5-2.5Zm.5,5.5c0,.275-.225.5-.5.5h-1c-.275,0-.5-.225-.5-.5v-3c0-.275.225-.5.5-.5h1c.275,0,.5.225.5.5v3Z"/></svg>

);
