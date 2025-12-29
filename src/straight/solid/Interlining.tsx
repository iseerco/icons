import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Interlining = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_07_interlining" data-name="07 interlining"><rect x="10" y="4" width="14" height="2"/><rect x="10" y="11" width="14" height="2"/><rect x="10" y="18" width="14" height="2"/><path d="M8,6,4.707,2.707a1,1,0,0,0-1.414,0L0,6H3V18H0l3.293,3.293a1,1,0,0,0,1.414,0L8,18H5V6Z"/></g></svg>

);
