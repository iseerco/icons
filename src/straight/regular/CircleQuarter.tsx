import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleQuarter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,13H0v-1C0,5.38,5.38,0,12,0h1V13ZM2.05,11H11V2.05C6.28,2.52,2.52,6.28,2.05,11Z"/></svg>

);
