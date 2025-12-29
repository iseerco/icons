import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const InboxIn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,12v9c0,1.654-1.346,3-3,3H3c-1.654,0-3-1.346-3-3V12H8v2c0,1.103,.897,2,2,2h4c1.103,0,2-.897,2-2v-2h8Zm-12-1.001c.512,0,1.024-.195,1.414-.585l3.293-3.293-1.414-1.414-2.293,2.293V0h-2V8l-2.293-2.293-1.414,1.414,3.293,3.293c.39,.39,.902,.585,1.414,.585Z"/></svg>

);
