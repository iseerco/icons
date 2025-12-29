import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGameBoardAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,0H3.5A3.5,3.5,0,0,0,0,3.5V24H24V3.5A3.5,3.5,0,0,0,20.5,0ZM3,12h9V3h8.5a.5.5,0,0,1,.5.5V12H12v9H3Z"/></svg>

);
