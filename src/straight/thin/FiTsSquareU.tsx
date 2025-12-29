import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquareU = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5,0H2.5C1.122,0,0,1.121,0,2.5v21.5h24V2.5c0-1.379-1.122-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v20.5Zm-5-19h1v9c0,3.859-3.14,7-7,7s-7-3.141-7-7V4h1v9c0,3.309,2.691,6,6,6s6-2.691,6-6V4Z"/></svg>

);
