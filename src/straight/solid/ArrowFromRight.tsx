import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowFromRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,5v6H2.793L7.1,6.7,5.682,5.283.732,10.232a2.5,2.5,0,0,0,0,3.536l4.95,4.949L7.1,17.3,2.793,13H22v6h2V5Z"/></svg>

);
