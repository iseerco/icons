import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MoneyBills = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,19H20v2H0V10c0-1.3,.84-2.4,2-2.82v11.82ZM14,9c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm10-3v11H4V6c0-1.65,1.35-3,3-3h14c1.65,0,3,1.35,3,3Zm-15,7.5c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5,1.5-.67,1.5-1.5Zm0-7c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5,1.5-.67,1.5-1.5Zm8,3.5c0-1.65-1.35-3-3-3s-3,1.35-3,3,1.35,3,3,3,3-1.35,3-3Zm5,3.5c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5,1.5-.67,1.5-1.5Zm0-7c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5,1.5-.67,1.5-1.5Z"/></svg>

);
