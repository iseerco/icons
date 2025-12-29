import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCheckDouble = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6.01,11.26L1.923,7.044l2.154-2.088,3.713,3.831L16.039.539l2.121,2.121-8.607,8.607c-.472.472-1.104.732-1.772.732-.67-.001-1.298-.264-1.77-.739Zm15.387-5.08l-13.611,13.611-5.221-5.266-2.13,2.113,5.574,5.62c.472.476,1.1.738,1.77.74.667,0,1.301-.26,1.773-.732l13.966-13.966-2.121-2.121Z"/></svg>

);
