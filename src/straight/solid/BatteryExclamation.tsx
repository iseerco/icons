import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BatteryExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10,18h2v2h-2v-2Zm0-1.911h2V4h-2v12.089ZM0,20h8V4H0v16Zm24-12h-2v-1c0-1.654-1.346-3-3-3h-5v16h5c1.654,0,3-1.346,3-3v-1h2v-8Z"/></svg>

);
