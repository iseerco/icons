import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBedEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,10H3V3.5c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5,1.5v17c0,.829.671,1.5,1.5,1.5s1.5-.671,1.5-1.5v-1.5h18v1.5c0,.829.672,1.5,1.5,1.5s1.5-.671,1.5-1.5v-5c0-3.033-2.468-5.5-5.5-5.5Zm-15.5,6v-3h15.5c1.379,0,2.5,1.122,2.5,2.5v.5H3Z"/>
</svg>

);
