import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowDownToSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,8.51v15.49H2V8.5c0-1.93,1.57-3.5,3.5-3.5h2.5v3h-2.5c-.28,0-.5,.22-.5,.5v12.5h14V8.5c0-.18-.09-.29-.14-.34s-.17-.15-.35-.15h-2.51s0-3.01,0-3.01h2.51c.93,0,1.81,.37,2.48,1.04,.66,.66,1.02,1.54,1.01,2.47ZM6.28,13.02l3.95,4.26c.48,.48,1.11,.73,1.75,.73s1.31-.25,1.82-.77l3.91-4.22-2.2-2.04-2.02,2.18V0h-3V13.15l-2.02-2.17-2.2,2.04Z"/></svg>

);
