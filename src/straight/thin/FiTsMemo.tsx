import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMemo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5,0H5.5c-1.379,0-2.5,1.121-2.5,2.5v21.5h18V2.5c0-1.379-1.121-2.5-2.5-2.5Zm1.5,23H4V2.5c0-.827.673-1.5,1.5-1.5h13c.827,0,1.5.673,1.5,1.5v20.5ZM7,5h10v1H7v-1Zm0,5h10v1H7v-1Zm0,5h5v1h-5v-1Z"/></svg>

);
