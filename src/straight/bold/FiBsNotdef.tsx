import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsNotdef = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.5,0H6.5c-1.93,0-3.5,1.57-3.5,3.5V24H21V3.5c0-1.93-1.57-3.5-3.5-3.5Zm-7.34,11.99l-4.16,5.83V6.16l4.16,5.83ZM7.43,3h9.15l-4.57,6.41L7.43,3Zm4.57,11.57l4.59,6.43H7.41l4.59-6.43Zm1.84-2.58l4.16-5.83v11.65l-4.16-5.83Z"/></svg>

);
