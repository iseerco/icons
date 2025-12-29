import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LoopSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22.5,10.5l-2.5-2.5v12c0,2.206-1.794,4-4,4H6v-2h10c1.103,0,2-.897,2-2V8l-2.5,2.5-1.414-1.414,3.5-3.5c.779-.78,2.049-.78,2.828,0l3.5,3.5-1.414,1.414Zm-12.586,4.414l-1.414-1.414-2.5,2.5V4c0-1.103,.897-2,2-2h10V0H8c-2.206,0-4,1.794-4,4v12l-2.5-2.5L.086,14.914l3.5,3.5c.39,.39,.902,.585,1.414,.585s1.024-.195,1.414-.585l3.5-3.5Z"/>
</svg>

);
