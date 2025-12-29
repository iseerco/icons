import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HomeLocation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,8a4,4,0,0,0-2.829,6.829L12,17.6l2.836-2.774A4,4,0,0,0,12,8Zm0,4.992a1,1,0,1,1,1-1A1,1,0,0,1,12,12.992ZM22.849,7.68l-9-7.043a3,3,0,0,0-3.7,0l-9,7.043A2.983,2.983,0,0,0,0,10.043V24H24V10.043A2.983,2.983,0,0,0,22.849,7.68Zm-6.606,8.563L12,20.393,7.765,16.25a6,6,0,1,1,8.478-8.493h0A6.008,6.008,0,0,1,16.243,16.243Z"/></svg>

);
