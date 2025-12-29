import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquareG = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5,0H2.5C1.122,0,0,1.122,0,2.5v21.5h24V2.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v20.5Zm-11-11h7v1c0,3.86-3.14,7-7,7s-7-3.14-7-7v-2c0-3.86,3.14-7,7-7,2.399,0,4.604,1.208,5.899,3.23l-.842.539c-1.11-1.734-3-2.77-5.057-2.77-3.309,0-6,2.691-6,6v2c0,3.309,2.691,6,6,6s6-2.691,6-6h-6v-1Z"/></svg>

);
