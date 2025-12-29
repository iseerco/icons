import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiamondExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.161,9.873L14.122.834c-1.134-1.133-3.11-1.133-4.243,0L.839,9.873c-1.17,1.17-1.17,3.073,0,4.243l9.039,9.039c.567.566,1.32.879,2.122.879s1.555-.312,2.121-.879l9.04-9.039c1.17-1.17,1.17-3.073,0-4.243Zm-10.161,8.127h-2v-2h2v2Zm0-4h-2V6h2v8Z"/></svg>

);
