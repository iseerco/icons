import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsOven = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.5,0H4.5c-1.378,0-2.5,1.122-2.5,2.5v21.5h20V2.5c0-1.378-1.121-2.5-2.5-2.5ZM4.5,1h15c.827,0,1.5.673,1.5,1.5v4.5H3V2.5c0-.827.673-1.5,1.5-1.5Zm-1.5,22v-15h18v15H3Zm2-2h14v-11H5v11Zm1-10h12v9H6v-9Zm3-7c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm4,0c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm4,0c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm-12,0c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Z"/>
</svg>

);
