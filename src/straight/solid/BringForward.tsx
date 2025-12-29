import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BringForward = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,16H0V3C0,1.35,1.35,0,3,0H13c1.65,0,3,1.35,3,3v13Zm5-8h-3v10H8v6H24V11c0-1.65-1.35-3-3-3Z"/></svg>

);
