import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Earnings = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H14a1,1,0,0,0,0,2h5a2.951,2.951,0,0,1,1.285.3L.293,22.293a1,1,0,1,0,1.414,1.414L21.7,3.715A2.951,2.951,0,0,1,22,5v5a1,1,0,0,0,2,0V5A5.006,5.006,0,0,0,19,0Z"/><path d="M6,10A4,4,0,1,0,2,6,4,4,0,0,0,6,10ZM6,4A2,2,0,1,1,4,6,2,2,0,0,1,6,4Z"/><path d="M18,14a4,4,0,1,0,4,4A4,4,0,0,0,18,14Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,20Z"/></svg>

);
