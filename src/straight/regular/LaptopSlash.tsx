import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LaptopSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,18v-3h-2V3H4.414L1.457.043.043,1.457l22.5,22.5,1.414-1.414-1.783-1.783c1.072-.458,1.826-1.523,1.826-2.76ZM6.414,5h13.586v10h-3.586L6.414,5Zm15.586,13c0,.552-.448,1-1,1h-.586l-2-2h3.586v1Zm-7.242,1l2,2H3c-1.654,0-3-1.346-3-3v-3h2V6.242l2,2v6.758h4.914l1,1h1.844l2,2h-4.672l-1-1H2v1c0,.552.448,1,1,1h11.758Z"/>
</svg>

);
