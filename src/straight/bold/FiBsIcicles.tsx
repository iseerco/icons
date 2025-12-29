import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsIcicles = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,0v2l2.867,16.617,2.359-5.309,3.164,10.546,3.79-10.831,2.379,5.233,2.284-5.482,3.665,10.994,3.472-21.529.02-2.239H0Zm19.491,11.231l-2.335-7.006-2.716,6.518-2.621-5.767-3.21,9.169-2.836-9.454-1.641,3.691-.937-5.383h17.623l-1.328,8.231Z"/>
</svg>

);
