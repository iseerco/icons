import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowTrendDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,9v7.293L13,6.293l-6,6L.729,6.021,.021,6.729l6.979,6.979,6-6,9.293,9.293h-7.293v1h7.5c.827,0,1.5-.673,1.5-1.5v-7.5h-1Z"/></svg>

);
