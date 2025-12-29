import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPedestal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,23V2.5c0-1.379-1.121-2.5-2.5-2.5H5.5c-1.379,0-2.5,1.121-2.5,2.5v20.5H1v1h22v-1h-2ZM4,2.5c0-.827.673-1.5,1.5-1.5h13c.827,0,1.5.673,1.5,1.5v20.5H4V2.5Zm4,1.5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm10,0c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"/>
</svg>

);
