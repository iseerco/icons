import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Procedures = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,8h-.095l-1.667,2h1.761c.551,0,1,.448,1,1v4h-12v-4c0-.552.449-1,1-1h3.583l-.833-2h-2.75c-1.439,0-2.643,1.018-2.933,2.371-.472-.237-1.004-.371-1.567-.371-1.93,0-3.5,1.57-3.5,3.5,0,.536.122,1.045.338,1.5h-1.338V4H0v20h2v-3h20v3h2v-13c0-1.654-1.346-3-3-3ZM5,13.5c0-.827.673-1.5,1.5-1.5s1.5.673,1.5,1.5-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5Zm-3,5.5v-2h20v2H2ZM24,4v2h-4.031l-3.257,3.908-2.416-5.799-1.261,1.891h-7.035v-2h5.965L14.704-.109l2.584,6.201,1.743-2.092h4.969Z"/></svg>

);
