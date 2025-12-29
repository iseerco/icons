import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCheckbox = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.667,17.787a2.36,2.36,0,0,0,1.679-.7l8.715-8.715L17.939,6.256,9.667,14.528,6.061,10.923,3.939,13.044l4.048,4.048A2.362,2.362,0,0,0,9.667,17.787Z"/><path d="M21,0H3A3,3,0,0,0,0,3V24H24V3A3,3,0,0,0,21,0Zm0,21H3V3H21Z"/></svg>

);
