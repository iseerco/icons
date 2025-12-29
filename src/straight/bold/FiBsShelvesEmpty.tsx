import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsShelvesEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.994,0v7H2.994V0H-.006v24h3v-2h18v2h3V0h-3ZM2.994,19v-9h18v9H2.994Z"/>
</svg>

);
