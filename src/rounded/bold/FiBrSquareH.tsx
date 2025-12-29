import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSquareH = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5,0H5.5C2.467,0,0,2.467,0,5.5v13c0,3.033,2.467,5.5,5.5,5.5h13c3.033,0,5.5-2.467,5.5-5.5V5.5c0-3.033-2.467-5.5-5.5-5.5Zm2.5,18.5c0,1.378-1.122,2.5-2.5,2.5H5.5c-1.378,0-2.5-1.122-2.5-2.5V5.5c0-1.378,1.122-2.5,2.5-2.5h13c1.378,0,2.5,1.122,2.5,2.5v13Zm-3-12v11c0,.829-.671,1.5-1.5,1.5s-1.5-.671-1.5-1.5v-4.5h-6v4.5c0,.829-.671,1.5-1.5,1.5s-1.5-.671-1.5-1.5V6.5c0-.829.671-1.5,1.5-1.5s1.5.671,1.5,1.5v3.5h6v-3.5c0-.829.671-1.5,1.5-1.5s1.5.671,1.5,1.5Z"/></svg>

);
