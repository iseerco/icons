import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPlusMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,8.5v1h-8.5v8.5h-1v-8.5H3v-1h8.5V0h1v8.5h8.5ZM3,24h18v-1H3v1Z"/></svg>

);
