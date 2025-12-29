import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsConciergeBell = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,19v-2c0-6.109-4.589-11.166-10.5-11.906V3h1.5V0h-6V3h1.5v2.094C4.589,5.834,0,10.891,0,17v2H10.5v2H0v3H24v-3H13.5v-2h10.5ZM12,8c4.625,0,8.446,3.506,8.945,8H3.055c.499-4.494,4.32-8,8.945-8Z"/></svg>

);
