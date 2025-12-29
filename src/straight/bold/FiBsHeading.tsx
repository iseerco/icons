import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHeading = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22,3v18h2v3h-7v-3h2v-8H5v8h2v3H0v-3h2V3H0V0h7v3h-2v7h14V3h-2V0h7v3h-2Z"/></svg>

);
