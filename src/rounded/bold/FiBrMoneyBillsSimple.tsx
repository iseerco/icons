import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrMoneyBillsSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,2H9.5c-2.48,0-4.5,2.02-4.5,4.5v6c0,2.48,2.02,4.5,4.5,4.5h10c2.48,0,4.5-2.02,4.5-4.5V6.5c0-2.48-2.02-4.5-4.5-4.5Zm1.5,10.5c0,.83-.67,1.5-1.5,1.5H9.5c-.83,0-1.5-.67-1.5-1.5V6.5c0-.83,.67-1.5,1.5-1.5h10c.83,0,1.5,.67,1.5,1.5v6Zm-2,8c0,.83-.67,1.5-1.5,1.5H5.5c-3.03,0-5.5-2.47-5.5-5.5V8.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5v8c0,1.38,1.12,2.5,2.5,2.5h12c.83,0,1.5,.67,1.5,1.5Zm-2-11c0,1.38-1.12,2.5-2.5,2.5s-2.5-1.12-2.5-2.5,1.12-2.5,2.5-2.5,2.5,1.12,2.5,2.5Z"/></svg>

);
