import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDirectionSignalArrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,12.543c0,.667-.26,1.295-.732,1.768l-3.75,3.75-2.121-2.121,1.896-1.896h-3.293c-1.379,0-2.5,1.122-2.5,2.5v7.457h-3v-3.5c0-1.378-1.122-2.5-2.5-2.5h-3.293l1.896,1.896-2.121,2.121-3.75-3.75c-.975-.975-.975-2.561,0-3.535l3.75-3.75,2.121,2.121-1.896,1.896h3.293c.9,0,1.75.217,2.5.602V4.707l-1.896,1.896-2.121-2.121,3.75-3.75c.975-.975,2.561-.975,3.535,0l3.75,3.75-2.121,2.121-1.896-1.896v6.938c.75-.385,1.6-.602,2.5-.602h3.293l-1.896-1.896,2.121-2.121,3.75,3.75c.472.471.732,1.099.732,1.768Z"/>
</svg>

);
