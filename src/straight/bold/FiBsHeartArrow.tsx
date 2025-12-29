import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHeartArrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.561,19.439,19.4,17.28c1.929-2.121,3.6-4.659,3.6-7.119A5.973,5.973,0,0,0,17.25,4,5.99,5.99,0,0,0,13,5.934,5.99,5.99,0,0,0,8.75,4a5.383,5.383,0,0,0-2.17.459L2.121,0,0,2.121,4.236,6.357A6.409,6.409,0,0,0,3,10.161c0,5.259,7.609,10.9,9.135,11.974l.865.61.865-.61a38.45,38.45,0,0,0,3.408-2.74l2.166,2.166L17,24h6a1,1,0,0,0,1-1V17ZM13,19.051c-3.606-2.732-7-6.476-7-8.89A2.98,2.98,0,0,1,8.75,7c1.757,0,2.921,2.071,2.929,2.085L12.986,11.5l1.331-2.409C14.329,9.071,15.493,7,17.25,7A2.98,2.98,0,0,1,20,10.161C20,12.575,16.606,16.319,13,19.051Z"/></svg>

);
