import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDisplaySlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,4.5c0-1.378-1.122-2.5-2.5-2.5H2.707L.753.046.046.753l23.2,23.2.707-.707-4.247-4.247h4.293V4.5Zm-1,13.5h-4.293L3.707,3h17.793c.827,0,1.5.673,1.5,1.5v13.5Zm-10.5,3h4.5v1H7v-1h4.5v-2H0V4.5c0-.287.059-.559.148-.816l.852.852v13.464h13.464l1,1h-2.964v2Z"/>
</svg>

);
