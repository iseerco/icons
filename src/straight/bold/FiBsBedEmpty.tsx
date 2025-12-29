import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBedEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,10H3V2H0v20h3v-3h18v3h3v-8.5c0-1.93-1.57-3.5-3.5-3.5ZM3,16v-3h17.5c.275,0,.5.224.5.5v2.5H3Z"/>
</svg>

);
