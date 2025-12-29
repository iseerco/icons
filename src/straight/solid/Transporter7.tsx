import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Transporter7 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20,24H4v-2h16v2ZM0,3.5l2.333,1.167,1.167,2.333,1.167-2.333,2.333-1.167-2.333-1.167L3.5,0l-1.167,2.333L0,3.5Zm17,12l2.5,1,1,2.5,1-2.5,2.5-1-2.5-1-1-2.5-1,2.5-2.5,1Z"/></svg>

);
