import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrTrafficCone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.5,23h-1.291l-5.398-14.693s0-.002,0-.003l-2.422-6.593C14.016.699,13.079.045,12,.045s-2.016.654-2.388,1.666l-2.423,6.594s0,0,0,0L1.791,23H.5c-.276,0-.5.224-.5.5s.224.5.5.5h23c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM6.164,14h11.672l1.47,4H4.694l1.469-4Zm1.837-5h7.998l1.47,4H6.531l1.469-4Zm2.551-6.944c.273-.745.928-1.011,1.448-1.011s1.175.266,1.448,1.012l2.183,5.943h-7.264l2.184-5.944Zm-6.225,16.944h15.346l1.47,4H2.858l1.469-4Z"/>
</svg>

);
