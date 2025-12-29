import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSmartphone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M4,0V21.5c0,1.379,1.122,2.5,2.5,2.5h11c1.379,0,2.5-1.121,2.5-2.5V0H4Zm15,1V17H5V1h14Zm-1.5,22H6.5c-.827,0-1.5-.673-1.5-1.5v-3.5h6.5v2h1v-2h6.5v3.5c0,.827-.673,1.5-1.5,1.5Z"/>
</svg>

);
