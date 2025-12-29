import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrMoneyCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,2H5.5C2.467,2,0,4.467,0,7.5v9c0,3.033,2.467,5.5,5.5,5.5h13c3.033,0,5.5-2.467,5.5-5.5V7.5c0-3.033-2.467-5.5-5.5-5.5Zm2.5,14.5c0,1.378-1.122,2.5-2.5,2.5H5.5c-1.378,0-2.5-1.122-2.5-2.5V7.5c0-1.378,1.122-2.5,2.5-2.5h13c1.378,0,2.5,1.122,2.5,2.5v9Zm-2-8v2c0,.828-.672,1.5-1.5,1.5h-4c-.828,0-1.5-.672-1.5-1.5v-2c0-.828,.672-1.5,1.5-1.5h4c.828,0,1.5,.672,1.5,1.5Zm-14,2c0-.829,.671-1.5,1.5-1.5h2c.829,0,1.5,.671,1.5,1.5s-.671,1.5-1.5,1.5h-2c-.829,0-1.5-.671-1.5-1.5Zm14,5c0,.829-.671,1.5-1.5,1.5H6.5c-.829,0-1.5-.671-1.5-1.5s.671-1.5,1.5-1.5h11c.829,0,1.5,.671,1.5,1.5Z"/></svg>

);
