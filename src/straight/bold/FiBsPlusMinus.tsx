import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPlusMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,7.5v3h-7.5v7.5h-3v-7.5H3v-3h7.5V0h3v7.5h7.5ZM3,24h18v-3H3v3Z"/></svg>

);
