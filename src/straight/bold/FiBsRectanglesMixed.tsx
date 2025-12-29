import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRectanglesMixed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,4.5v6.5h13V1H3.5C1.57,1,0,2.57,0,4.5Zm10,3.5H3v-3.5c0-.275.224-.5.5-.5h6.5v4Zm10.5-5h-5.5v17h5.5c1.93,0,3.5-1.57,3.5-3.5V6.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,13.5c0,.275-.224.5-.5.5h-2.5V6h2.5c.276,0,.5.225.5.5v10Zm-19,3c0,1.93,1.57,3.5,3.5,3.5h7.5v-10H2v6.5Zm3-3.5h5v4h-4.5c-.276,0-.5-.225-.5-.5v-3.5Z"/>
</svg>

);
