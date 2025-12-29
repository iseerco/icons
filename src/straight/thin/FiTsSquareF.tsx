import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquareF = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5,0H2.5C1.121,0,0,1.122,0,2.5v21.5h24V2.5c0-1.378-1.121-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v20.5ZM7,4h12v1H7c-.552,0-1,.449-1,1v5h10v1H6v8h-1V6c0-1.103.897-2,2-2Z"/></svg>

);
