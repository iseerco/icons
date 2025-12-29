import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCourtSport = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,3H2.5c-1.378,0-2.5,1.121-2.5,2.5v13c0,1.379,1.122,2.5,2.5,2.5h19c1.378,0,2.5-1.121,2.5-2.5V5.5c0-1.379-1.122-2.5-2.5-2.5ZM1,9h3v6H1v-6Zm10.5,11H2.5c-.827,0-1.5-.673-1.5-1.5v-2.5h4v-8H1v-2.5c0-.827.673-1.5,1.5-1.5h9v4.051c-1.968.249-3.5,1.915-3.5,3.949s1.532,3.7,3.5,3.949v4.051Zm-2.5-8c0-1.654,1.346-3,3-3s3,1.346,3,3-1.346,3-3,3-3-1.346-3-3Zm14,3h-3v-6h3v6Zm0-7h-4v8h4v2.5c0,.827-.673,1.5-1.5,1.5h-9v-4.051c1.968-.249,3.5-1.915,3.5-3.949s-1.532-3.7-3.5-3.949v-4.051h9c.827,0,1.5.673,1.5,1.5v2.5Z"/>
</svg>

);
