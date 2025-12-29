import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Equality = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.21,2h-7.21V0h-2V2H3.79L0,12.83v.67c0,2.481,2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5v-.67L5.909,4h5.091V22H4v2H20v-2h-7V4h5.091l-3.091,8.83v.67c0,2.481,2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5v-.67l-3.79-10.83ZM6.591,12H2.409l2.091-5.973,2.091,5.973Zm12.909-5.973l2.091,5.973h-4.181l2.091-5.973Z"/></svg>

);
