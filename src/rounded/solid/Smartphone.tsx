import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Smartphone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,0H9A5.006,5.006,0,0,0,4,5V16H20V5A5.006,5.006,0,0,0,15,0Z"/><path d="M4,19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V18H4Zm8,1a1,1,0,1,1-1,1A1,1,0,0,1,12,20Z"/></svg>

);
