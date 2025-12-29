import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserCrown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,24H5c-.29,0-.565-.126-.755-.345s-.275-.51-.234-.797c.559-3.91,3.994-6.858,7.99-6.858s7.431,2.948,7.99,6.858c.041.287-.044.578-.234.797s-.465.345-.755.345ZM15,3L12.703.32c-.37-.431-1.037-.431-1.406,0l-2.297,2.68L7.397.341c-.418-.628-1.397-.331-1.397.423v5.236h12V.764c0-.754-.978-1.051-1.397-.423l-1.603,2.659Zm-9,5c0,3.309,2.691,6,6,6s6-2.691,6-6H6Z"/>
</svg>

);
