import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BatteryEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,8h-2v-1c0-1.654-1.346-3-3-3H0V20H19c1.654,0,3-1.346,3-3v-1h2V8Z"/></svg>

);
