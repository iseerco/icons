import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsY = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="21.922 0 20.658 0 12 11.183 3.342 0 2.078 0 11.5 12.171 11.5 24 12.5 24 12.5 12.171 21.922 0"/></svg>

);
