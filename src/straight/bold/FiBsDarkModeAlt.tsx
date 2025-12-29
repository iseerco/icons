import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDarkModeAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,16c0,4.411-3.589,8-8,8H8C3.589,24,0,20.411,0,16c0-3.659,2.473-6.741,5.833-7.689,.599,1.113,1.494,2.04,2.576,2.689h-.408c-2.757,0-5,2.243-5,5s2.243,5,5,5h8c2.757,0,5-2.243,5-5s-2.243-5-5-5h-.408c1.081-.648,1.975-1.574,2.574-2.686,3.359,.948,5.834,4.028,5.834,7.686Zm-8,3c1.654,0,3-1.346,3-3s-1.346-3-3-3-3,1.346-3,3,1.346,3,3,3ZM6.957,5C6.957,2.239,9.196,0,11.957,0s5,2.239,5,5-2.239,5-5,5-5-2.239-5-5Zm2,0c0,1.657,1.343,3,3,3,.556,0,1.069-.161,1.516-.425-1.156-.291-2.016-1.329-2.016-2.575s.859-2.284,2.016-2.575c-.446-.263-.96-.425-1.516-.425-1.657,0-3,1.343-3,3Z"/>
</svg>

);
