import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Cocktail = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.982,3H.018a2.985,2.985,0,0,1,.5-1.683A3,3,0,0,1,3,0H21a3,3,0,0,1,2.487,1.317A2.985,2.985,0,0,1,23.982,3ZM11,11.962V22H6v2H18V22H13V11.962A12.565,12.565,0,0,0,23.385,5H.615A12.565,12.565,0,0,0,11,11.962Z"/></svg>

);
