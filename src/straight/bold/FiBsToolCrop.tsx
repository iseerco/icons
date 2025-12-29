import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsToolCrop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,17H20V6.5A2.5,2.5,0,0,0,17.5,4H7V0H4V4H0V7H4V17.5A2.5,2.5,0,0,0,6.5,20H17v4h3V20h4ZM7,17V7H17V17Z"/></svg>

);
