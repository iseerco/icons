import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBoxAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,0H2.5C1.121,0,0,1.121,0,2.5v21.5h24V2.5c0-1.379-1.121-2.5-2.5-2.5Zm1.5,2.5v2.5h-8V1h6.5c.827,0,1.5.673,1.5,1.5Zm-13-1.5h4v8h-4V1Zm-7.5,0h6.5v4H1v-2.5c0-.827.673-1.5,1.5-1.5Zm-1.5,22V6h8v4h6v-4h8v17H1Zm14-4h5v1h-5v-1Z"/>
</svg>

);
