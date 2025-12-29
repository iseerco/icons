import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquareD = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5,0H2.5C1.121,0,0,1.122,0,2.5v21.5h24V2.5c0-1.378-1.121-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v20.5ZM12.071,4h-5.071c-1.103,0-2,.897-2,2v12c0,1.103.897,2,2,2h5.071c3.82,0,6.929-3.108,6.929-6.929v-2.143c0-3.82-3.108-6.929-6.929-6.929Zm5.929,9.071c0,3.269-2.659,5.929-5.929,5.929h-5.071c-.552,0-1-.449-1-1V6c0-.551.448-1,1-1h5.071c3.27,0,5.929,2.66,5.929,5.929v2.143Z"/></svg>

);
