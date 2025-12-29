import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsReel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,3V0H0V3H4V21H0v3H24v-3h-4v-7.5h1c1.657,0,3-1.343,3-3h-4V3h4ZM7,21v-2h10v2H7Zm10-5H7v-2.5h10v2.5ZM7,10.5v-2.5h10v2.5H7Zm10-5.5H7V3h10v2Z"/></svg>

);
