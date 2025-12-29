import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTimeWatchCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10,21.88v1.01C4.367,22.152,0,17.332,0,11.5,0,5.159,5.159,0,11.5,0c5.831,0,10.652,4.367,11.391,10h-1.01c-.732-5.08-5.101-9-10.38-9C5.71,1,1,5.71,1,11.5c0,5.279,3.92,9.648,9,10.38Zm1-10.675l-4.243,2.357.486.874,4.757-2.643v-6.794h-1v6.206Zm13,4.294v8.5h-12v-8.5c0-.827.673-1.5,1.5-1.5h.5v-2h1v2h6v-2h1v2h.5c.827,0,1.5.673,1.5,1.5Zm-1,2.5h-10v5h10v-5Zm0-2.5c0-.276-.225-.5-.5-.5h-9c-.275,0-.5.224-.5.5v1.5h10v-1.5Z"/>
</svg>

);
