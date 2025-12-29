import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSignalBarsWeak = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4.5,24h-1c-1.93,0-3.5-1.57-3.5-3.5v-3c0-1.93,1.57-3.5,3.5-3.5h1c1.93,0,3.5,1.57,3.5,3.5v3c0,1.93-1.57,3.5-3.5,3.5Zm-1-7c-.275,0-.5.225-.5.5v3c0,.275.225.5.5.5h1c.275,0,.5-.225.5-.5v-3c0-.275-.225-.5-.5-.5h-1Z"/></svg>

);
