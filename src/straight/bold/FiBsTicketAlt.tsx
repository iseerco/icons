import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTicketAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,21H3.5c-1.93,0-3.5-1.57-3.5-3.5v-4H1.5c.827,0,1.5-.673,1.5-1.5s-.673-1.5-1.5-1.5H0V6.5c0-1.93,1.57-3.5,3.5-3.5H20.5c1.93,0,3.5,1.57,3.5,3.5v4h-1.5c-.827,0-1.5,.673-1.5,1.5s.673,1.5,1.5,1.5h1.5v4c0,1.93-1.57,3.5-3.5,3.5ZM3,16.243v1.257c0,.276,.224,.5,.5,.5H20.5c.276,0,.5-.224,.5-.5v-1.257c-1.746-.619-3-2.288-3-4.243s1.254-3.624,3-4.243v-1.257c0-.276-.224-.5-.5-.5H3.5c-.276,0-.5,.224-.5,.5v1.257c1.746,.619,3,2.288,3,4.243s-1.254,3.624-3,4.243Z"/></svg>

);
