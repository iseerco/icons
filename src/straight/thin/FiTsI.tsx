import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsI = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="19 1 19 0 5 0 5 1 11.387 1 11.497 23 5 23 5 24 19 24 19 23 12.497 23 12.387 1 19 1"/></svg>

);
