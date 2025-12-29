import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ConciergeBell = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,21v2H0v-2H11v-2H1v-3C1,10.272,5.402,5.558,11,5.051V3h-2V1h6V3h-2v2.051c5.598,.508,10,5.221,10,10.949v3H13v2h11Z"/></svg>

);
