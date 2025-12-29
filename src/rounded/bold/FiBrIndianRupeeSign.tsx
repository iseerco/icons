import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrIndianRupeeSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,6.5c0,.83-.67,1.5-1.5,1.5h-1.52c-.26,3.9-3.52,7-7.48,7h-1.8l7.75,6.34c.64,.52,.74,1.47,.21,2.11-.3,.36-.73,.55-1.16,.55-.33,0-.67-.11-.95-.34L3.55,14.66c-.49-.4-.68-1.07-.46-1.67,.21-.6,.78-1,1.41-1h6c2.31,0,4.22-1.75,4.47-4H4.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5H14.24c-.81-1.21-2.18-2-3.74-2H4.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h15c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5h-3c.45,.6,.82,1.28,1.08,2h1.93c.83,0,1.5,.67,1.5,1.5Z"/></svg>

);
