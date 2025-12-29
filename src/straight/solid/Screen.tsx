import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Screen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,19V6a3,3,0,0,0-3-3H3A3,3,0,0,0,0,6V19H11v1H7v2H17V20H13V19Z"/></svg>

);
