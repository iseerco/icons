import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCouch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,8h-2v-1.5c0-3.033-2.467-5.5-5.5-5.5H7.5c-3.033,0-5.5,2.467-5.5,5.5v1.5H0v13h2v2h3v-2h14v2h3v-2h2v-13Zm-3,10H3v-2h18v2ZM5,6.5c0-1.378,1.122-2.5,2.5-2.5h9c1.378,0,2.5,1.122,2.5,2.5v6.5H5v-6.5Z"/>
</svg>

);
