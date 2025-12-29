import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Rhombus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><title>17-Diamond</title><rect x="3.515" y="3.515" width="16.971" height="16.971" transform="translate(-4.971 12) rotate(-45)"/></svg>

);
