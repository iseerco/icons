import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MoneyBillsSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,3H7c-1.65,0-3,1.35-3,3v11H24V6c0-1.65-1.35-3-3-3Zm1,12H6V6c0-.55,.45-1,1-1h14c.55,0,1,.45,1,1V15ZM2,19H20v2H0V10c0-1.3,.84-2.4,2-2.82v11.82ZM14,7c-1.65,0-3,1.35-3,3s1.35,3,3,3,3-1.35,3-3-1.35-3-3-3Zm0,4c-.55,0-1-.45-1-1s.45-1,1-1,1,.45,1,1-.45,1-1,1Z"/></svg>

);
