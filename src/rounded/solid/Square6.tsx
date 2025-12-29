import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Square6 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,14c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2ZM24,5v14c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-8,9c0-2.206-1.794-4-4-4-.639,0-1.235,.164-1.771,.432,.478-1.629,1.721-2.432,3.771-2.432,.552,0,1-.448,1-1s-.448-1-1-1c-3.813,0-6,2.26-6,6.2v1.8c0,2.206,1.794,4,4,4s4-1.794,4-4Z"/></svg>

);
