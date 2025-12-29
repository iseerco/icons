import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrExchangeAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,6.5A1.5,1.5,0,0,1,1.5,5H18V2.449a.978.978,0,0,1,1.666-.7l4.011,3.958a1.086,1.086,0,0,1,0,1.546l-4.011,3.959a.979.979,0,0,1-1.666-.7V8H1.5A1.5,1.5,0,0,1,0,6.5ZM22.5,16H6V13.449a.978.978,0,0,0-1.666-.7L.323,16.711a1.086,1.086,0,0,0,0,1.546l4.011,3.959A.979.979,0,0,0,6,21.519V19H22.5a1.5,1.5,0,0,0,0-3Z"/></svg>

);
