import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ToiletPaperXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19,17c1.657,0,3-3.806,3-8.5S20.657,0,19,0s-3,3.806-3,8.5,1.343,8.5,3,8.5Zm0-10.5c.552,0,1,.895,1,2s-.448,2-1,2-1-.895-1-2,.448-2,1-2Zm5,15.5v2H11c-1.657,0-3-1.343-3-3v-2h11c1.241,0,2.235-.68,3-1.794v2.794c0,1.103,.897,2,2,2ZM14,8.5c0-3.238,.595-6.491,1.868-8.5H5C2.196,0,0,3.5,0,8.5s2.196,8.5,5,8.5H15.868c-1.273-2.009-1.868-5.262-1.868-8.5Zm-3.793,1.793l-1.414,1.414-1.793-1.793-1.793,1.793-1.414-1.414,1.793-1.793-1.793-1.793,1.414-1.414,1.793,1.793,1.793-1.793,1.414,1.414-1.793,1.793,1.793,1.793Z"/>
</svg>

);
