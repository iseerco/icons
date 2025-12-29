import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCaretSquareDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.83,15.65a1.115,1.115,0,0,1-1.66,0L6,10H18ZM24,3.5A3.5,3.5,0,0,0,20.5,0H3.5A3.5,3.5,0,0,0,0,3.5V24H24ZM3,3.5A.5.5,0,0,1,3.5,3h17a.5.5,0,0,1,.5.5V21H3Z"/></svg>

);
