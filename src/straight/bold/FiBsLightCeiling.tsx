import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLightCeiling = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13.5,6.104V0h-3v6.104C4.59,6.846,0,11.892,0,18v2h8c0,2.209,1.791,4,4,4s4-1.791,4-4h8v-2c0-6.108-4.59-11.154-10.5-11.896ZM3.056,17c.499-4.494,4.319-8,8.944-8s8.445,3.506,8.944,8H3.056Z"/>
</svg>

);
