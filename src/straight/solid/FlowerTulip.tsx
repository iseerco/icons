import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FlowerTulip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.973,14A10.6,10.6,0,0,0,13,20.672V13.91A6.006,6.006,0,0,0,18,8C18,4,14.108.872,14.085.85A20.472,20.472,0,0,0,12,9H10A22.276,22.276,0,0,1,12.258.054,3.024,3.024,0,0,0,9.844.908C7.943,2.848,6,5.207,6,8a6.006,6.006,0,0,0,5,5.91v6.762A10.6,10.6,0,0,0,1.027,14H0l.127,1.124C.923,22.145,7.5,24,10.86,24h2.28c3.365,0,9.936-1.855,10.731-8.876L24,14Z"/></svg>

);
