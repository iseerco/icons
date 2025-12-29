import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMoneyBillsSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,2H8.5c-1.93,0-3.5,1.57-3.5,3.5v11.5H24V5.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,12H8V5.5c0-.28,.22-.5,.5-.5h12c.28,0,.5,.22,.5,.5V14ZM3,19H19v3H0V10.5c0-1.76,1.31-3.2,3-3.45v11.95Zm14-9.5c0,1.38-1.12,2.5-2.5,2.5s-2.5-1.12-2.5-2.5,1.12-2.5,2.5-2.5,2.5,1.12,2.5,2.5Z"/></svg>

);
