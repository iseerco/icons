import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowUpLeftFromCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3,5.121v4.879H0V2.5C0,1.122,1.122,0,2.5,0h7.5V3H5.121l11.439,11.439-2.121,2.121L3,5.121Zm11-1.121c-1.478,0-2.878,.331-4.142,.909l2.336,2.336c.577-.155,1.18-.245,1.806-.245,3.859,0,7,3.14,7,7s-3.141,7-7,7-7-3.14-7-7c0-.625,.09-1.228,.245-1.806l-2.336-2.336c-.578,1.264-.909,2.663-.909,4.141,0,5.514,4.486,10,10,10s10-4.486,10-10S19.514,4,14,4Z"/></svg>

);
