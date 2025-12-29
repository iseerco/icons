import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRectangleList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,1H2.5C1.122,1,0,2.122,0,3.5v19.5h24V3.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,21H1V3.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v18.5ZM9,6h11v1h-11v-1Zm-3,.5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm3,5h11v1h-11v-1Zm-3,.5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm3,5h11v1h-11v-1Zm-3,.5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"/>
</svg>

);
