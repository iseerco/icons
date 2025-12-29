import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bahai = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.181,24l-4.171-3.329-4.171,3.329-1.054-5.231-5.335-.13,2.554-4.687L0,10.423l4.969-1.947-.798-5.277,5.059,1.703L12.01,.345l2.781,4.557,5.058-1.703-.798,5.277,4.969,1.947-4.003,3.529,2.554,4.687-5.335,.13-1.054,5.231Z"/></svg>

);
