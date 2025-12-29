import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMattressPillow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,3H2.5c-1.378,0-2.5,1.121-2.5,2.5v13c0,1.379,1.122,2.5,2.5,2.5h19c1.379,0,2.5-1.121,2.5-2.5V5.5c0-1.379-1.121-2.5-2.5-2.5ZM1,8h6v8H1v-8Zm0,10.5v-1.5h7V7H1v-1.5c0-.827.673-1.5,1.5-1.5h7.5v16H2.5c-.827,0-1.5-.673-1.5-1.5Zm22,0c0,.827-.673,1.5-1.5,1.5h-10.5V4h10.5c.827,0,1.5.673,1.5,1.5v13Z"/>
</svg>

);
