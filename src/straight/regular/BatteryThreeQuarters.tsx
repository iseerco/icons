import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BatteryThreeQuarters = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,8h-2v-1c0-1.654-1.346-3-3-3H0V20H19c1.654,0,3-1.346,3-3v-1h2V8Zm-4,9c0,.551-.448,1-1,1H2V6H19c.552,0,1,.449,1,1v10Zm-16-1H15V8H4v8Z"/></svg>

);
