import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBlockQuote = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,3v1H0v-1h24ZM6,21h18v-1H6v1Zm0-9h18v-1H6v1ZM0,21h1v-10H0v10Z"/>
</svg>

);
