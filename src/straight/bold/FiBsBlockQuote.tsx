import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBlockQuote = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,2v3H0v-3h24ZM7,22h17v-3H7v3Zm0-9h17v-3H7v3ZM0,22h3v-12H0v12Z"/>
</svg>

);
