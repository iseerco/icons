import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Scythe = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.683,0C5.528,0,1.709,7.195,1.308,8.015L.066,10.546l2.559-1.184c1.954-.904,4.161-1.363,6.558-1.363h10.156l-1.512,5h-6.827v2h6.223l-2.537,8.393,1.914.579L23.847,0h-8.164Z"/></svg>

);
