import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CallOutgoing = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.613,12.848l6.265,6.265-3.171,3.171A5.893,5.893,0,0,1,16.5,24C9.252,24,0,14.748,0,7.5A5.893,5.893,0,0,1,1.716,3.293L4.887.122l6.265,6.265L7.027,10.512a12.145,12.145,0,0,0,6.453,6.469ZM21.529,0H17V2h3.615L15,7.62l1.414,1.414L22,3.443V7h2V2.5A2.488,2.488,0,0,0,21.529,0Z"/></svg>

);
