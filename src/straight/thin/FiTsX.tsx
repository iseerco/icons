import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsX = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="20.658 0 12 11.183 3.342 0 2.078 0 11.368 12 2.078 24 3.342 24 12 12.817 20.658 24 21.922 24 12.632 12 21.922 0 20.658 0"/></svg>

);
