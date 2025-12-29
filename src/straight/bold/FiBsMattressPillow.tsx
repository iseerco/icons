import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMattressPillow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,3H3.5c-1.93,0-3.5,1.57-3.5,3.5v11c0,1.93,1.57,3.5,3.5,3.5h17c1.93,0,3.5-1.57,3.5-3.5V6.5c0-1.93-1.57-3.5-3.5-3.5ZM3,17.5v-1.5h4v-8H3v-1.5c0-.275.224-.5.5-.5h5.5v12H3.5c-.276,0-.5-.225-.5-.5Zm18,0c0,.275-.225.5-.5.5h-8.5V6h8.5c.275,0,.5.225.5.5v11Z"/>
</svg>

);
