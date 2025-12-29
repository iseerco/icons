import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowFromRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M.858,14.09l4.731,4.731A1.5,1.5,0,0,0,7.71,16.7L4.462,13.516H21V17.75a1.5,1.5,0,0,0,3,0V6.28a1.5,1.5,0,0,0-3,0v4.236H4.525L7.71,7.331A1.5,1.5,0,0,0,5.589,5.209L.857,9.941A2.938,2.938,0,0,0,.858,14.09Z"/></svg>

);
