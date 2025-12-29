import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCircleQuarter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,13H0v-1.5C0,5.16,5.16,0,11.5,0h1.5V13ZM3.13,10h6.87V3.13c-3.49,.62-6.24,3.38-6.87,6.87Z"/></svg>

);
