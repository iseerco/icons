import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTableRows = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,2H5.5C2.467,2,0,4.468,0,7.5v9c0,3.032,2.467,5.5,5.5,5.5h13c3.032,0,5.5-2.468,5.5-5.5V7.5c0-3.032-2.468-5.5-5.5-5.5Zm2.5,5.5v2.5H8V5h10.5c1.379,0,2.5,1.121,2.5,2.5ZM3,16.5V7.5c0-1.208,.86-2.217,2-2.45v13.899c-1.14-.232-2-1.242-2-2.45Zm15.5,2.5H8v-6h13v3.5c0,1.379-1.121,2.5-2.5,2.5Z"/></svg>

);
