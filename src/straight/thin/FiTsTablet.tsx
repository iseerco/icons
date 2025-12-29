import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTablet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M2,0V21.5c0,1.379,1.121,2.5,2.5,2.5h15c1.379,0,2.5-1.121,2.5-2.5V0H2ZM21,1V18H3V1H21Zm-1.5,22H4.5c-.827,0-1.5-.673-1.5-1.5v-2.5H11.5v2h1v-2h8.5v2.5c0,.827-.673,1.5-1.5,1.5Z"/>
</svg>

);
