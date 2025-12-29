import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBrowser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,1H2.5C1.122,1,0,2.122,0,3.5v19.5h24V3.5c0-1.378-1.121-2.5-2.5-2.5ZM2.5,2h19c.827,0,1.5.673,1.5,1.5v2.5H1v-2.5c0-.827.673-1.5,1.5-1.5Zm-1.5,20V7h22v15H1Zm4-10h14v1H5v-1Zm0,4h10v1H5v-1ZM3,4c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm3,0c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm3,0c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Z"/>
</svg>

);
