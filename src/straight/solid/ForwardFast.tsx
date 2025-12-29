import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ForwardFast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <polygon points="22 0 22 9.293 9.001 .098 9 7 0 .057 0 23.944 9 17 9.001 23.903 22 14.707 22 24 24 24 24 0 22 0"/>
</svg>

);
