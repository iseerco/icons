import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RubleSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.5,15c4.136,0,7.5-3.364,7.5-7.5S18.636,0,14.5,0H5V13H2v2h3v2H2v2h3v5h2v-5h9v-2H7v-2h7.5ZM7,2h7.5c3.033,0,5.5,2.468,5.5,5.5s-2.467,5.5-5.5,5.5H7V2Z"/></svg>

);
