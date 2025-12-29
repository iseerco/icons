import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRubleSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.5,15c4.136,0,7.5-3.364,7.5-7.5S18.636,0,14.5,0H5V12H2v3h3v2H2v3h3v4h3v-4h8v-3H8v-2h6.5ZM8,3h6.5c2.481,0,4.5,2.019,4.5,4.5s-2.019,4.5-4.5,4.5h-6.5V3Z"/></svg>

);
