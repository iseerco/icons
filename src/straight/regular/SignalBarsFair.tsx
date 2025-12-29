import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SignalBarsFair = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,11h-2c-1.103,0-2,.897-2,2v3h-2c-1.103,0-2,.897-2,2v6h10v-11c0-1.103-.897-2-2-2Zm-4,11h-2v-4h2v4Zm4,0h-2v-9h2v9Z"/></svg>

);
