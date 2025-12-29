import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDeleteRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16.241,2H3.5c-1.93,0-3.5,1.57-3.5,3.5v13c0,1.93,1.57,3.5,3.5,3.5h12.741l7.647-10-7.647-10Zm-1.482,17H3.5c-.275,0-.5-.224-.5-.5V5.5c0-.276.225-.5.5-.5h11.259l5.353,7-5.353,7Zm-.698-8.939l-1.939,1.939,1.939,1.939-2.121,2.121-1.939-1.939-1.939,1.939-2.121-2.121,1.939-1.939-1.939-1.939,2.121-2.121,1.939,1.939,1.939-1.939,2.121,2.121Z"/>
</svg>

);
