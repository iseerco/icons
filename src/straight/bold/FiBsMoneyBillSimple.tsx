import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMoneyBillSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,3H3.5c-1.93,0-3.5,1.57-3.5,3.5v14.5H24V6.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,15H3V6.5c0-.28,.22-.5,.5-.5H20.5c.28,0,.5,.22,.5,.5v11.5Zm-6-6c0,1.66-1.34,3-3,3s-3-1.34-3-3,1.34-3,3-3,3,1.34,3,3Z"/></svg>

);
