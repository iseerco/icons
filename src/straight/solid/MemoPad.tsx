import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MemoPad = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m2,5v-2c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v2H2Zm20,2v17H2V7h20Zm-9,9h-6v2h6v-2Zm4-5H7v2h10v-2Z"/></svg>

);
