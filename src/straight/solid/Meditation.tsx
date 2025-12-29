import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Meditation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M8.947,3c0-1.657,1.367-3,3.054-3s2.946,1.343,2.946,3-1.26,3-2.946,3-3.054-1.343-3.054-3Zm9.334,11.225l4.171,2.727,1.095-1.674-3.829-2.503-2.293-3.439c-.558-.836-1.491-1.336-2.496-1.336h-5.859c-1.005,0-1.938,.5-2.496,1.336l-2.293,3.439L.453,15.278l1.095,1.674,4.171-2.727,2.281-3.422v7.656l-6,3.815v1.726h7v-4s5.702,0,5.702,0l3.059,2h-6.761v2h11v-1.618l-6-3.923v-7.656l2.281,3.422Z"/>
</svg>

);
