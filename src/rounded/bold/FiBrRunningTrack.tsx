import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrRunningTrack = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,4h-8C3.589,4,0,7.589,0,12s3.589,8,8,8h8c4.411,0,8-3.589,8-8s-3.589-8-8-8Zm0,13h-8c-2.757,0-5-2.243-5-5s2.243-5,5-5h5v2h-5c-1.654,0-3,1.346-3,3s1.346,3,3,3h8c1.654,0,3-1.346,3-3s-1.346-3-3-3v-2c2.757,0,5,2.243,5,5s-2.243,5-5,5Z"/>
</svg>

);
