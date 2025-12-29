import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BookmarkSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,19.586V3c0-1.654-1.346-3-3-3H6.559c-1.393,0-2.566.954-2.903,2.242L1.457.043.043,1.457l22.5,22.5,1.414-1.414-2.957-2.957Zm-10.083-3.661l-7.917,8.075v-15.991l7.917,7.916Z"/></svg>

);
