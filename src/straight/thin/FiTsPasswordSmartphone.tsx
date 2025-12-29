import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPasswordSmartphone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15,17H1V1h14.5V0H0v21.5c0,1.378,1.121,2.5,2.5,2.5h11c1.379,0,2.5-1.122,2.5-2.5v-5.5h-1v1Zm-1.5,6H2.5c-.827,0-1.5-.673-1.5-1.5v-3.5h14v3.5c0,.827-.673,1.5-1.5,1.5ZM3,3v11h21V3H3Zm20,10H4V4h19v9Zm-11.758-2.925l1.551-1.551-1.551-1.551.707-.707,1.551,1.551,1.551-1.551.707.707-1.551,1.551,1.551,1.551-.707.707-1.551-1.551-1.551,1.551-.707-.707Zm6.095,0l1.551-1.551-1.551-1.551.707-.707,1.551,1.551,1.551-1.551.707.707-1.551,1.551,1.551,1.551-.707.707-1.551-1.551-1.551,1.551-.707-.707Zm-12.19,0l1.551-1.551-1.551-1.551.707-.707,1.551,1.551,1.551-1.551.707.707-1.551,1.551,1.551,1.551-.707.707-1.551-1.551-1.551,1.551-.707-.707Z"/>
  <rect x="6" y="20" width="4" height="1"/>
</svg>

);
