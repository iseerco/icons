import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SignalBarsGood = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15,5h-2c-1.103,0-2,.897-2,2v4h-2c-1.103,0-2,.897-2,2v3h-2c-1.103,0-2,.897-2,2v6h14V7c0-1.103-.897-2-2-2ZM7,22h-2v-4h2v4Zm4,0h-2v-9h2v9Zm4,0h-2V7h2v15Z"/></svg>

);
