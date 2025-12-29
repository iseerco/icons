import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BlockQuote = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,3v2H0v-2h24ZM6,21h18v-2H6v2Zm0-8h18v-2H6v2ZM0,21h2v-10H0v10Z"/>
</svg>

);
