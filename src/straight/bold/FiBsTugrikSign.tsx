import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTugrikSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.5,3v5.66l6.5-2.17v3.17l-6.5,2.17v2.33l6.5-2.17v3.17l-6.5,2.17v6.67h-3v-5.67l-6.5,2.17v-3.17l6.5-2.17v-2.33l-6.5,2.17v-3.17l6.5-2.17V3H2V0H22V3H13.5Z"/></svg>

);
