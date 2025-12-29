import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TabletAndroidAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,16V3c0-1.654,1.346-3,3-3h12c1.654,0,3,1.346,3,3v13H3Zm18,2v6H3v-6h18Zm-7,2h-4v2h4v-2Z"/>
</svg>

);
