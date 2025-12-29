import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrows = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.268,10.232l-3.75-3.75L17.4,8.6l1.94,1.939H13.5V4.707l1.9,1.9,2.122-2.122L13.768.732a2.5,2.5,0,0,0-3.536,0l-3.75,3.75L8.6,6.6l1.9-1.9v5.836H4.707l1.9-1.9L4.482,6.525.733,10.274a2.5,2.5,0,0,0,0,3.537l3.75,3.75L6.6,15.439l-1.9-1.9H10.5v5.75L8.6,17.4,6.482,19.518l3.75,3.75a2.5,2.5,0,0,0,3.536,0l3.75-3.75L15.4,17.4l-1.9,1.9v-5.75h5.75L17.4,15.4l2.122,2.122,3.75-3.75A2.5,2.5,0,0,0,23.268,10.232Z"/></svg>

);
