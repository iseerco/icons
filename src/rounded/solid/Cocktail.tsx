import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Cocktail = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24.009,4H-.009A4.012,4.012,0,0,1,4,0H20a4.012,4.012,0,0,1,4.009,4Zm-.555,2H.534A13.814,13.814,0,0,0,11,11.965V22H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2H13V11.965A13.8,13.8,0,0,0,23.454,6Z"/></svg>

);
