import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Cheeseburger = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.004,10.999C22.989,4.832,18.157,0,12.004,0,5.938,0,1.004,4.936,1.004,11.001v1h22.002l-.002-1.002Zm0,3.002v2h-4.001l-3.5,3.5-3.5-3.5H1.004v-2h22Zm-7.504,8.241l-4.241-4.241H1.002v2h.001c0,2.206,1.795,4,4,4h14c2.206,0,4-1.794,4-4v-2h-3.263l-4.241,4.241Z"/></svg>

);
