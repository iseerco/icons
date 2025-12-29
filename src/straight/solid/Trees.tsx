import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Trees = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.556,15h2.384l-3.958-6h2.154l-4.654-7.897-.076-.112c-.497-.63-1.266-.991-2.107-.991s-1.612.362-2.108.992l-3.549,6.008h-2.181L10.473.08c-.216-.053-.443-.08-.675-.08-.843,0-1.611.362-2.108.992L2.959,9h2.155l-3.958,6h2.383L.063,21h2.314l3.475-6h2.188l-3.475,6h3.964v3h2v-3h3v3h2v-3h8.505l-3.478-6Zm-13.581-2h-2.104l2.638-4h2.104l-2.638,4Z"/>
</svg>

);
