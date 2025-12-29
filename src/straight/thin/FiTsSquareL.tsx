import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquareL = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7,19h12v1H7c-1.103,0-2-.897-2-2V4h1v14c0,.551.448,1,1,1ZM24,2.5v21.5H0V2.5C0,1.122,1.121,0,2.5,0h19c1.379,0,2.5,1.122,2.5,2.5Zm-1,0c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5.673-1.5,1.5v20.5h22V2.5Z"/></svg>

);
