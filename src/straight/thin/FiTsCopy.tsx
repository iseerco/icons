import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCopy = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,21H0V2.5C0,1.122,1.122,0,2.5,0h16c1.378,0,2.5,1.122,2.5,2.5v18.5Zm-20-1h19V2.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5.673-1.5,1.5v17.5ZM24,3h-1v20H3v1h21V3Z"/>
</svg>

);
