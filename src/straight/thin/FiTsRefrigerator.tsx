import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRefrigerator = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.5,0H4.5c-1.379,0-2.5,1.122-2.5,2.5v21.5h20V2.5c0-1.378-1.121-2.5-2.5-2.5ZM4.5,1h15c.827,0,1.5.673,1.5,1.5v6.5h-4v-4h-1v4H3V2.5c0-.827.673-1.5,1.5-1.5Zm-1.5,22v-13h13v8h1v-8h4v13H3Z"/>
</svg>

);
