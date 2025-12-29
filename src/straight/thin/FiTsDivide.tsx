import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDivide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,6.5c.827,0,1.5-.673,1.5-1.5s-.673-1.5-1.5-1.5-1.5.673-1.5,1.5.673,1.5,1.5,1.5Zm12,5v1H0v-1h24Zm-12,6c-.827,0-1.5.673-1.5,1.5s.673,1.5,1.5,1.5,1.5-.673,1.5-1.5-.673-1.5-1.5-1.5Z"/>
</svg>

);
