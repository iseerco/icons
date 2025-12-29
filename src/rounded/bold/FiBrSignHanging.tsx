import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSignHanging = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,5.602V3h1.5c.829,0,1.5-.671,1.5-1.5s-.671-1.5-1.5-1.5H5.5C2.467,0,0,2.467,0,5.5V22.5c0,.829,.671,1.5,1.5,1.5s1.5-.671,1.5-1.5V5.5c0-1.378,1.122-2.5,2.5-2.5h2.5v2.602c-1.779,.912-3,2.765-3,4.898v5c0,3.033,2.467,5.5,5.5,5.5h8c3.033,0,5.5-2.467,5.5-5.5v-5c0-2.133-1.221-3.986-3-4.898Zm-3-2.602v2h-7V3h7Zm3,12.5c0,1.378-1.122,2.5-2.5,2.5H10.5c-1.378,0-2.5-1.122-2.5-2.5v-5c0-1.378,1.122-2.5,2.5-2.5h8c1.378,0,2.5,1.122,2.5,2.5v5Z"/></svg>

);
