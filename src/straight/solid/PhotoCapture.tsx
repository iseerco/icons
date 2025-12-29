import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PhotoCapture = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,12c0,3.314-2.686,6-6,6s-6-2.686-6-6,2.686-6,6-6,6,2.686,6,6Zm-11,10H3c-.552,0-1-.448-1-1v-4H0v4c0,1.654,1.346,3,3,3h4v-2Zm17-1v-4h-2v4c0,.552-.448,1-1,1h-4v2h4c1.654,0,3-1.346,3-3Zm0-18c0-1.654-1.346-3-3-3h-4v2h4c.552,0,1,.448,1,1v4h2V3ZM2,3c0-.552.448-1,1-1h4V0H3C1.346,0,0,1.346,0,3v4h2V3Z"/>
</svg>

);
