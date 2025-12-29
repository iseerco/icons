import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSignalBarsWeak = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5,14h-2c-1.654,0-3,1.346-3,3v7h8v-7c0-1.654-1.346-3-3-3Zm0,7h-2v-4h2v4Z"/></svg>

);
