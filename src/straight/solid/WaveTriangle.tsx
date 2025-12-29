import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WaveTriangle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="16.652 23.04 7.256 5.093 1.71 14.615 -.018 13.608 7.35 .959 16.747 18.908 22.29 9.405 24.018 10.413 16.652 23.04"/></svg>

);
