import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMountains = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,8a4,4,0,0,1,0-8A4,4,0,0,1,20,8Zm4,16H10V21.656L14.336,12.7a2.965,2.965,0,0,1,5.341.026L24,21.656ZM13.638,21H20.35l-3.385-6.99Zm-.4-13.981a3.488,3.488,0,0,0-6.3,0L0,22.172V24H8V21H3.81L9.665,8.272a.46.46,0,0,1,.849,0l1.829,3.976.163-.354a4.921,4.921,0,0,1,1.971-2.188Z"/></svg>

);
