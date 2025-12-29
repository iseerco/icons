import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Keynote = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,18v-2h-1.28l-2-6H5v-3c0-1.654,1.346-3,3-3h.184c.414,1.161,1.514,2,2.816,2h3c1.654,0,3-1.346,3-3s-1.346-3-3-3h-3c-1.302,0-2.402,.839-2.816,2h-.184c-2.757,0-5,2.243-5,5v3.838l-1.72,5.162H0v2H11v4H7v2h10v-2h-4v-4h11Z"/></svg>

);
