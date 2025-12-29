import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsK = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="22.13 0 20.941 0 13.227 12 3 12 3 0 2 0 2 24 3 24 3 13 13.235 13 20.715 24 21.925 24 14.1 12.492 22.13 0"/></svg>

);
