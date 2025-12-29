import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsForward = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1,23.8V.2L9,5.911V.317L22.18,9.058a3.278,3.278,0,0,1,0,5.335L9,23.8V18.089ZM12,12.26v5.715l8.437-6.023a.271.271,0,0,0,.116-.226.268.268,0,0,0-.1-.217L12,5.906V11.74L4,6.026V17.974Z"/></svg>

);
