import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCaretSquareLeft_1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.35,12.84a1.115,1.115,0,0,1,0-1.66L14,6.01v12ZM24,3.5A3.5,3.5,0,0,0,20.5,0H3.5A3.5,3.5,0,0,0,0,3.5V24H24ZM3,3.5A.5.5,0,0,1,3.5,3h17a.5.5,0,0,1,.5.5V21H3Z"/></svg>

);
