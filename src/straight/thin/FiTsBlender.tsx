import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBlender = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.077,18.048L20.912,0H4.5C2.57,0,1,1.57,1,3.5v7c0,1.93,1.57,3.5,3.5,3.5h1.5v4.036c-1.694.243-3,1.704-3,3.464v2.5h18v-2.5c0-1.733-1.267-3.176-2.923-3.452Zm-11.077-4.048h3v-1h-3v-3h3v-1h-3v-3h3v-1h-3V1h12.742l-2.67,17H7v-4Zm-2.5-1c-1.378,0-2.5-1.122-2.5-2.5V3.5c0-1.378,1.122-2.5,2.5-2.5h1.5v12h-1.5Zm15.5,10H4v-1.5c0-1.378,1.122-2.5,2.5-2.5h11c1.379,0,2.5,1.122,2.5,2.5v1.5Z"/>
</svg>

);
