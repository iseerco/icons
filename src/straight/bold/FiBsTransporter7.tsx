import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTransporter7 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4,21h16v3H4v-3ZM7,3.5l-2.333-1.167L3.5,0l-1.167,2.333L0,3.5l2.333,1.167,1.167,2.333,1.167-2.333,2.333-1.167Zm14.5,11l-1-2.5-1,2.5-2.5,1,2.5,1,1,2.5,1-2.5,2.5-1-2.5-1Z"/></svg>

);
