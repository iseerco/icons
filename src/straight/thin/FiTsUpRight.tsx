import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsUpRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7.33,23.04L.96,16.67,11.67,5.96,6.81,1h13.69c.67,0,1.3,.26,1.77,.73,.47,.47,.73,1.1,.73,1.77v13.68s-4.97-4.86-4.97-4.86L7.33,23.04Zm-4.95-6.36l4.95,4.95,10.7-10.7,3.97,3.89V3.51c0-.4-.15-.78-.44-1.07-.28-.28-.66-.44-1.06-.44H9.19l3.89,3.97L2.38,16.67Z"/></svg>

);
