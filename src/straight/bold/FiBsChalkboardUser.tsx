import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChalkboardUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3,10.5c0-1.933,1.567-3.5,3.5-3.5s3.5,1.567,3.5,3.5-1.567,3.5-3.5,3.5-3.5-1.567-3.5-3.5Zm6.5,5.5H3.5c-1.93,0-3.5,1.57-3.5,3.5v4.5h3v-4.5c0-.275.224-.5.5-.5h6c.276,0,.5.225.5.5v4.5h3v-4.5c0-1.93-1.57-3.5-3.5-3.5ZM20.5,0h-12c-1.93,0-3.5,1.57-3.5,3.5v1.712c.477-.135.979-.212,1.5-.212s1.023.077,1.5.212v-1.712c0-.275.224-.5.5-.5h12c.276,0,.5.225.5.5v12.5h-2v-3h-5v3.367c.532.762.886,1.657.975,2.633h9.025V3.5c0-1.93-1.57-3.5-3.5-3.5Z"/></svg>

);
