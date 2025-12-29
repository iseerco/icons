import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSpoon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.838,1.162c-2.707-2.708-8.746-.13-11,2.123a6.282,6.282,0,0,0-.927,7.682L.064,21.814l2.122,2.122L13.031,13.09a6.262,6.262,0,0,0,7.684-.929C22.968,9.908,25.548,3.872,22.838,1.162ZM18.594,10.04a3.356,3.356,0,0,1-4.634,0,3.281,3.281,0,0,1,0-4.634,9.812,9.812,0,0,1,5.708-2.423,1.493,1.493,0,0,1,1.05.3C21.626,4.192,20.336,8.3,18.594,10.04Z"/></svg>

);
