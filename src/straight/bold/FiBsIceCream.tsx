import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsIceCream = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.311,4.094a5.506,5.506,0,0,0-10.622,0,5.543,5.543,0,0,0-3.9,8.312L12,24.11l9.207-11.7A5.543,5.543,0,0,0,17.311,4.094ZM19,9.5a2.7,2.7,0,0,1-.065.5H13.523C13.177,6.428,18.762,5.834,19,9.5ZM12,3a2.493,2.493,0,0,1,2.221,1.377A5.774,5.774,0,0,0,12,5.881a5.774,5.774,0,0,0-2.221-1.5A2.493,2.493,0,0,1,12,3ZM7.75,7a2.736,2.736,0,0,1,2.727,3H5.065A2.564,2.564,0,0,1,7.75,7Zm-.688,6h9.876L12,19.265Z"/></svg>

);
