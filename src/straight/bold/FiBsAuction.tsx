import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAuction = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13.142,14.864l-.702.702,2.121,2.121,8.021-8.021-2.121-2.121-.742.742-5.397-5.384.738-.738L12.939.043,4.937,8.045l2.121,2.121.685-.685,1.632,1.628L.045,20.439l2.121,2.121,9.334-9.333,1.641,1.637Zm.292-8.611l2.933,2.926-2.335,2.335-2.933-2.926,2.335-2.335Zm10.567,14.747v3h-15v-3h1c0-1.103.897-2,2-2h9c1.103,0,2,.897,2,2h1Z"/>
</svg>

);
